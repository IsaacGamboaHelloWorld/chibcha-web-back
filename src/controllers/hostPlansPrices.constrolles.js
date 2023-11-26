import { pool } from './../db.js';

export const getHostPlanPaymentPlan = async(req, res) => {
    const [rows] = await pool.query('SELECT * FROM payments_plans_host_plans')
    res.send(rows);
}


export const getHostPlanPaymentPlanByFilter = async(req, res) => {
    const {host_id,payment_id} =  req.body

    console.log('entrando ',host_id,payment_id)
    const [rows] = await pool.query('SELECT * FROM payments_plans_host_plans WHERE host_plan_id = ? AND payment_plan_id = ?', [host_id,payment_id])
    res.send({price:rows[0].price});
}

