import { pool } from './../db.js';

export const getDomainRequest = async(req, res) => {
    const result = await pool.query('SELECT * FROM domain_requests')
    res.send(result.data);
}

export const createDomainRequest = async(req, res) => {
    const { id, customer_id, domain_distribuidor_id, domain } = req.body
    await pool.query(
        'INSERT INTO domain_requests (id, customer_id, domain_distribuidor_id, domain) VALUES ( ?, ?, ?, ?)', { id, customer_id, domain_distribuidor_id, domain }
    )
    res.send('se registro exitosamente!!!');
}

export const updateDomainRequest = async(req, res) => {
    const { id, customer_id, domain_distribuidor_id, domain } = req.params
    await pool.query(
        'UPDATE domain_requests set customer_id = ?, domain_distribuidor_id = ?, domain = ? WHERE id = ?', { id, customer_id, domain_distribuidor_id, domain }
    )
    res.send('se actualizo exitosamente!!!');
}

export const deleteDomainRequest = async(req, res) => {
    const { id } = req.params
    await pool.query('DELETE FROM domain_requests WHERE id = ?', { id })
    res.send('se elimino exitosamente!!!');
}