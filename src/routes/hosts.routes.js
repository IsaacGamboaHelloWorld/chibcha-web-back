import { Router } from "express";
import { getHosts, createHost, updateHost, deleteHost } from "./../controllers/hosts.controller.js"
const router = Router()

router.get('/host', getHosts)
router.post('/host', createHost)
router.put('/host', updateHost)
router.delete('/host', deleteHost)

export default router