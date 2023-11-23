import { pool } from "./../db.js";

export const getUsers = (req, res) => res.send("obteniendo usuarios");

export const createUser = async (req, res) => {
  const {
    name,
    last_name,
    email,
    password,
    role_id,
    type,
    corporation,
    address,
    job_title,
  } = req.body;

  const [rows] = await pool.query(
    "INSERT INTO users (role_id, email, name, last_name, password) VALUES (?, ?, ?, ?, ?)",
    [role_id, email, name, last_name, password]
  );

  if (type === 1) {
    await pool.query(
      "INSERT INTO customers (user_id, corporation, address) VALUES (?, ?, ?)",
      [rows.insertId, corporation, address]
    );
    res.send("Se inserta customer");
  } else {
    await pool.query(
      "INSERT INTO employees (user_id, job_title) VALUES (?, ?)",
      [rows.insertId, job_title]
    );
    res.send("Se inserta empleado");
  }
};

export const updateUsers = (req, res) => res.send("actualizando empleados");

export const deleteUsers = (req, res) => res.send("eliminando empleados");
