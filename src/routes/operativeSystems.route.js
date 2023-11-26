import { Router } from "express";
import { createOS, deleteOS, getOS } from "../controllers/operativeSistems.controller.js";
const router = Router()

router.get('/operative-systems', getOS)
router.post('/operative-systems', createOS)
router.delete('/operative-systems', deleteOS)
