import {pool} from './../db.js'

export const getUsers = (req , res) => res.send('obteniendo usuarios')

export const createUser = async (req , res) =>{
    const {name,last_name,email,password,role_id} = req.body
    await pool.query(
        'INSERT INTO users (role_id, email, name, last_name, password) VALUES (?, ?, ?, ?, ?)',
        [role_id,email,name,last_name,password]
        )

    res.send('funciono')
}

export const updateUsers = (req , res) => res.send('actualizando empleados')

export const deleteUsers = (req , res) => res.send('eliminando empleados')