import { pool } from './../db.js';

export const getOS = async(req, res) => {
    const result = await pool.query('SELECT * FROM operative_systems')
    res.send(result.data);
}

export const createOS = async(req, res) => {
    const { osName } = req.body
    await pool.query(
        'INSERT INTO operative_systems (os_name) VALUES (?)', { osName }
    )
    res.send('se registro exitosamente!!!');
}

export const deleteOS = async(req, res) => {
    const { id } = req.params
    await pool.query('DELETE FROM operative_systems WHERE id = ?', { id })
    res.send('se elimino exitosamente!!!');
}