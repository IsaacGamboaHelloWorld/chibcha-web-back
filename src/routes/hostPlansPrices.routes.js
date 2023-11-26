import { Router } from "express";
import { getHostPlanPaymentPlan, getHostPlanPaymentPlanByFilter} from "../controllers/hostPlansPrices.constrolles.js";
const router = Router()

router.get('/prices', getHostPlanPaymentPlan)
router.post('/price', getHostPlanPaymentPlanByFilter)


export default router