import { pool } from "./../db.js";

export const getTickets = async (req, res) => {
  const customer_id = req.infoUser.id;

  const [rows] = await pool.query(
    "SELECT *,hosts.*,hosts.name AS host_name FROM " +
      "tickets " +
      "INNER JOIN hosts ON tickets.host_id = hosts.id " +
      "WHERE hosts.customer_id = ?",
    [customer_id]
  );
  res.send(rows);
};

export const getAllTickets = async (req, res) => {
    const [rows] = await pool.query(
        "SELECT *,hosts.*,hosts.name AS host_name, hosts.id AS host_id,tickets.id AS id  FROM " +
          "tickets " +
          "INNER JOIN hosts ON tickets.host_id = hosts.id " +
          "INNER JOIN users ON users.id = hosts.customer_id"
      );
      res.send(rows);
};

export const createTicket = async (req, res) => {
  const { host_id, status, problem } = req.body;
  await pool.query(
    "INSERT INTO tickets (host_id, status, problem) VALUES ( ?, ?, ?)",
    [host_id, status, problem]
  );
  res.send("se registro exitosamente!!!");
};