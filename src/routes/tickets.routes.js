import { Router } from "express";
import { getTickets,getAllTickets,createTicket, updateTicket } from "./../controllers/ticketsController.js"

const router = Router()

router.get('/tickets', getTickets)
router.get('/tickets_all', getAllTickets)
router.post('/tickets', createTicket)
router.put('/tickets',updateTicket)

export default router