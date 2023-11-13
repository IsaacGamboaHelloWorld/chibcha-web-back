import { Router } from "express";
import {getUsers, createUser, updateUsers, deleteUsers} from "./../controllers/users.controller.js"
const router = Router()

router.get('/users', getUsers)
router.post('/users',createUser)
router.put('/users',updateUsers)
router.delete('/users', deleteUsers)

export default router