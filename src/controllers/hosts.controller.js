import { pool } from './../db.js';

export const getHosts = async(req, res) => {
    const result = await pool.query('SELECT * FROM hosts')
    console.log('Entrando a get Host' , req.infoUser)
    res.send(result.data);
}

export const createHost = async(req, res) => {
    const { id, customer_id, host_plan_id, payment_plan_id, operative_system_id } = req.body
    await pool.query(
        'INSERT INTO hosts (id, customer_id, host_plan_id, payment_plan_id, operative_system_id) VALUES ( ?, ?, ?, ?, ?)', { id, customer_id, host_plan_id, payment_plan_id, operative_system_id }
    )
    res.send('se registro exitosamente!!!');
}

export const updateHost = async(req, res) => {
    const { id, customer_id, host_plan_id, payment_plan_id, operative_system_id } = req.params
    await pool.query(
        'UPDATE hosts set customer_id = ?, host_plan_id = ?, payment_plan_id = ?, operative_system_id = ? WHERE id = ?', { id, customer_id, host_plan_id, payment_plan_id, operative_system_id }
    )
    res.send('se actualizo exitosamente!!!');
}

export const deleteHost = async(req, res) => {
    const { id } = req.params
    await pool.query('DELETE FROM hosts WHERE id = ?', { id })
    res.send('se elimino exitosamente!!!');
}