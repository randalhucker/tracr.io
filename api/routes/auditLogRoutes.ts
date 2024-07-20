import { Router } from 'express';
import * as auditLogController from '../controllers/auditLogController.ts';

const router = Router();

router.post('/', auditLogController.createAuditLog);
router.get('/:auditLogId', auditLogController.getAuditLogDetails);
router.put('/:auditLogId', auditLogController.updateAuditLogDetails);
router.delete('/:auditLogId', auditLogController.deleteAuditLog);

export default router;
