import { pool } from "./../db.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [rows]=await  pool.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email,password]
    );

    const token = jwt.sign({ id: rows[0].id}, "secret_key");
    console.log(rows,email)
    if(rows.length<=0) return res.status(404).json({
        message: 'No existe usuario'
    })
    res.send({ token, infoUser:rows[0] });

  } catch (error) {
    return res.status(500).json({
        message:'Algo salio mal'
    })
  }
};
