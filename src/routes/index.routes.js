import { Router } from "express";
import { pool } from "./../db.js"

const router = Router()

router.get('/ping', async (req , res) => {
    const result = await pool.query('SELECT * from users')
    res.json(result)
 })
 
 export default router
