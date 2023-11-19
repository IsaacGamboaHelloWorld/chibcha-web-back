import { Router } from "express";
import { getDomainDis, createDomainDis, updateDomainDis, deleteDomainDis } from "./../controllers/domainDistribuitors.controller.js"
const router = Router()

router.get('/domain_distribuitors', getDomainDis)
router.post('/domain_distribuitors', createDomainDis)
router.put('/domain_distribuitors', updateDomainDis)
router.delete('/domain_distribuitors', deleteDomainDis)

export default router