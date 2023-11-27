import { pool } from "./../db.js";

export const getDomainRequest = async (req, res) => {
  const customer_id = req.infoUser.id;

  const [rows] = await pool.query(
    "SELECT *,hosts.*,hosts.name AS host_name, domain_distribuitors.*, domain_distribuitors.name AS domain_distribuitors_name FROM " +
      "domain_requests " +
      "INNER JOIN hosts ON domain_requests.host_id = hosts.id " +
      "INNER JOIN domain_distribuitors ON domain_requests.domain_distribuitor_id = domain_distribuitors.id " +
      "WHERE hosts.customer_id = ?",
    [customer_id]
  );
  res.send(rows);
};

export const getAllDomainRequest = async (req, res) => {
    const [rows] = await pool.query(
        "SELECT *,hosts.*,hosts.name AS host_name, domain_distribuitors.name AS dm_name FROM " +
          "domain_requests " +
          "INNER JOIN hosts ON domain_requests.host_id = hosts.id " +
          "INNER JOIN domain_distribuitors ON domain_requests.domain_distribuitor_id = domain_distribuitors.id "
      );
      res.send(rows);
};

export const createDomainRequest = async (req, res) => {
  const { host_id,domain_distribuitor_id,domain,state } = req.body;
  await pool.query(
    "INSERT INTO domain_requests (host_id, domain_distribuitor_id, domain, state) VALUES ( ?, ?, ?, ?)",
    [ host_id, domain_distribuitor_id, domain,state ]
  );
  res.send("se registro exitosamente!!!");
};

export const updateDomainRequest = async (req, res) => {
  const { id, customer_id, domain_distribuidor_id, domain } = req.params;
  await pool.query(
    "UPDATE domain_requests set customer_id = ?, domain_distribuidor_id = ?, domain = ? WHERE id = ?",
    { id, customer_id, domain_distribuidor_id, domain }
  );
  res.send("se actualizo exitosamente!!!");
};

export const deleteDomainRequest = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM domain_requests WHERE id = ?", { id });
  res.send("se elimino exitosamente!!!");
};
