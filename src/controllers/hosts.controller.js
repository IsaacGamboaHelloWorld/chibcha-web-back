import { pool } from "./../db.js";

export const getHosts = async (req, res) => {
    const customer_id = req.infoUser.id;
    const [rows] = await pool.query(
        "SELECT * FROM "+ 
        "hosts "+
        "INNER JOIN host_plans ON hosts.host_plan_id = host_plans.id "+
        "INNER JOIN payment_plans ON hosts.payment_plan_id = payment_plans.id "+
        "INNER JOIN operative_systems ON hosts.operative_system_id =  operative_systems.id "+
        "WHERE customer_id = ?",
        [customer_id]
    );
    res.send(rows);
};

export const createHost = async (req, res) => {
    const { host_plan_id, payment_plan_id, operative_system_id, name } = req.body;
    const customer_id = req.infoUser.id;

    await pool.query(
        "INSERT INTO hosts (customer_id, host_plan_id, payment_plan_id, operative_system_id, name) VALUES (?, ?, ?, ?, ?)",
        [customer_id, host_plan_id, payment_plan_id, operative_system_id, name]
    );
    res.send("se registro exitosamente el host!!!");
};

export const updateHost = async (req, res) => {
    const {
        id,
        customer_id,
        host_plan_id,
        payment_plan_id,
        operative_system_id,
    } = req.params;
    await pool.query(
        "UPDATE hosts set customer_id = ?, host_plan_id = ?, payment_plan_id = ?, operative_system_id = ? WHERE id = ?",
        {customer_id, host_plan_id, payment_plan_id, operative_system_id }
    );
    res.send("se actualizo exitosamente!!!");
};

export const deleteHost = async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM hosts WHERE id = ?", { id });
    res.send("se elimino exitosamente!!!");
};
