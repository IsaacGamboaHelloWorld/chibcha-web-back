import { pool } from './../db.js';

export const getHostPlans = async(req, res) => {
    const result = await pool.query('SELECT * FROM host_plans')
    res.send(result.data);

}

export const createHostPlans = async(req, res) => {
    const { id, name } = req.body
    await pool.query(
        'INSERT INTO host_plans (id, name) VALUES ( ?, ?)', { id, name }
    )
    res.send('se registro exitosamente!!!');
}

export const updateHostPlans = async(req, res) => {
    const { id, name } = req.params
    await pool.query(
        'UPDATE host_plans set name = ? WHERE id = ?', { name, id }
    )
    res.send('se actualizo exitosamente!!!');
}

export const deleteHostPlans = async(req, res) => {
    const { id } = req.params
    await pool.query('DELETE FROM host_plans WHERE id = ?', { id })
    res.send('se elimino exitosamente!!!');
}