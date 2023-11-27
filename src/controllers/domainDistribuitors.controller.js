import { pool } from './../db.js';

export const getDomainDis = async(req, res) => {
    const [row] = await pool.query('SELECT * FROM domain_distribuitors')
    res.send(row);
}

export const createDomainDis = async(req, res) => {
    const { id, name } = req.body
    await pool.query(
        'INSERT INTO domain_distribuitors (id, name) VALUES ( ?, ?)', { id, name }
    )
    res.send('se registro exitosamente!!!');
}

export const updateDomainDis = async(req, res) => {
    const { id, name } = req.params
    await pool.query(
        'UPDATE domain_distribuitors set name = ?,  WHERE id = ?', { name, id }
    )
    res.send('se actualizo exitosamente!!!');
}

export const deleteDomainDis = async(req, res) => {
    const { id } = req.params
    await pool.query('DELETE FROM domain_distribuitors WHERE id = ?', { id })
    res.send('se elimino exitosamente!!!');
}