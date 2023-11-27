import { Router } from "express";
import { getTickets,getAllTickets,createTicket } from "./../controllers/ticketsController.js"

const router = Router()

router.get('/tickets', getTickets)
router.get('/tickets_all', getAllTickets)
router.post('/tickets', createTicket)

export default router