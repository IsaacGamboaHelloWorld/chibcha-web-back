import { Router } from "express";
import { getHosts, createHost, updateHost, deleteHost,hostCreateParameters, getAllHosts } from "./../controllers/hosts.controller.js"
const router = Router()

router.get('/host', getHosts)
router.get('/host-all', getAllHosts)
router.get('/host/parameters', hostCreateParameters)
router.post('/host', createHost)
router.put('/host', updateHost)
router.delete('/host/:id', deleteHost)

export default router