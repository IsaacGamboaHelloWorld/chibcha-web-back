import { pool } from './../db.js';

export const getPaymentPlans = async(req, res) => {
    const [rows] = await pool.query('SELECT * FROM payment_plans')
    res.send(rows);
}

export const createPaymentPlans = async(req, res) => {
    const { paymentName } = req.body
    await pool.query(
        'INSERT INTO payment_plans (payment_name) VALUES (?)', [paymentName]
    )
    res.send('se registro exitosamente!!!');
}

export const deletePaymentPlans = async(req, res) => {
    const { id } = req.params
    await pool.query('DELETE FROM payment_plans WHERE id = ?', { id })
    res.send('se elimino exitosamente!!!');
}