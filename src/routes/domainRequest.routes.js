import { Router } from "express";
import { getDomainRequest, createDomainRequest, updateDomainRequest, deleteDomainRequest } from "./../controllers/domainRequest.controller.js"
const router = Router()

router.get('/domain_request', getDomainRequest)
router.post('/domain_request', createDomainRequest)
router.put('/domain_request', updateDomainRequest)
router.delete('/domain_request', deleteDomainRequest)

export default router