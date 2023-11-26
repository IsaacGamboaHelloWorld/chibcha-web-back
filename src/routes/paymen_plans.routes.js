import { Router } from "express";
import { createPaymentPlans, deletePaymentPlans, getPaymentPlans } from "../controllers/paymen_plans.controller.js";
const router = Router()

router.get('/payment-plans', getPaymentPlans)
router.post('/payment-plans', createPaymentPlans)
router.delete('/payment-plans', deletePaymentPlans)

export default router