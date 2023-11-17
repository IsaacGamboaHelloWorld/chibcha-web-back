import { Router } from "express";
import { getHostPlans, createHostPlans, updateHostPlans, deleteHostPlans } from "./../controllers/hostPlans.controller.js"
const router = Router()

router.get('/host-plans', getHostPlans)
router.post('/host-plans', createHostPlans)
router.put('/host-plans', updateHostPlans)
router.delete('/host-plans', deleteHostPlans)

export default router