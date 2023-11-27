import { pool } from "./../db.js";

export const getHosts = async (req, res) => {
  const customer_id = req.infoUser.id;
  const [rows] = await pool.query(
    "SELECT *, hosts.*, hosts.id AS id FROM " +
      "hosts " +
      "INNER JOIN host_plans ON hosts.host_plan_id = host_plans.id " +
      "INNER JOIN payment_plans ON hosts.payment_plan_id = payment_plans.id " +
      "INNER JOIN operative_systems ON hosts.operative_system_id =  operative_systems.id " +
      "WHERE hosts.customer_id = ?",
      
    [customer_id]
  );

  const [rowsDomains] = await pool.query(
    "SELECT domain_requests.*, hosts.id, hosts.name AS host_name FROM " +
      "domain_requests " +
      "INNER JOIN hosts ON domain_requests.host_id = hosts.id "
  );
  const data= rows.map((host)=>({...host,domains:rowsDomains.filter((domain)=>domain.host_id === host.id && domain.state === 'activo'  )}))
  res.send(data);
};


export const getAllHosts = async (req, res) => {
  const [rows] = await pool.query(
    "SELECT *, hosts.*, hosts.id AS id FROM " +
      "hosts " +
      "INNER JOIN host_plans ON hosts.host_plan_id = host_plans.id " +
      "INNER JOIN payment_plans ON hosts.payment_plan_id = payment_plans.id " +
      "INNER JOIN operative_systems ON hosts.operative_system_id =  operative_systems.id " 
      
  );

  const [rowsDomains] = await pool.query(
    "SELECT domain_requests.*, hosts.id, hosts.name AS host_name FROM " +
      "domain_requests " +
      "INNER JOIN hosts ON domain_requests.host_id = hosts.id "
  );
  const data= rows.map((host)=>({...host,domains:rowsDomains.filter((domain)=>domain.host_id === host.id && domain.state === 'activo'  )}))
  res.send(data);
};

export const createHost = async (req, res) => {
  const { host_plan_id, payment_plan_id, operative_system_id, name,description} = req.body;
  const customer_id = req.infoUser.id;
  const generarNumero = () => Math.floor(Math.random() * 256);
  const randomIp = `${generarNumero()}.${generarNumero()}.${generarNumero()}.${generarNumero()}`;

   const [rows] = await pool.query(
    "INSERT INTO hosts (customer_id, host_plan_id, payment_plan_id, operative_system_id, name, description, ip) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [customer_id, host_plan_id, payment_plan_id, operative_system_id, name, description, randomIp]
  );

  // await pool.query(
  //   "INSERT INTO payments (host_id, amount) VALUES (?, ?)",
  //   [customer_id, host_plan_id, payment_plan_id, operative_system_id, name]
  // );
  res.send("se registro exitosamente el host!!!");
};

export const updateHost = async (req, res) => {
  const {
    id,
    host_plan_id,
    payment_plan_id,
    operative_system_id,
    name
  } = req.body;
  const customer_id = req.infoUser.id;
  await pool.query(
    "UPDATE hosts set customer_id = ?, host_plan_id = ?, payment_plan_id = ?, operative_system_id = ?, name = ? WHERE id = ?",
    [ customer_id, host_plan_id, payment_plan_id, operative_system_id,name,id ]
  );
  res.send("se actualizo exitosamente!!!");
};

export const hostCreateParameters = async (req, res) => {
  const [hostPlansRows] = await pool.query("SELECT * FROM host_plans");

  const [paymentRows] = await pool.query("SELECT * FROM payment_plans");

  const [OSRows] = await pool.query("SELECT * FROM operative_systems");

  res.send({
    operativeSystems: OSRows,
    hostPlans: hostPlansRows,
    paymentPlans: paymentRows,
  });
};

export const deleteHost = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM hosts WHERE id = ?", [id]);
  res.send("se elimino exitosamente!!!");
};
