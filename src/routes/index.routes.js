import { Router } from "express";
import { pool } from "./../db.js"

const router = Router()

router.get('/', async (req , res) => {
    res.send('funciono correctamente')
 })
 
 export default router
