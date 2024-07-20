import { Router } from 'express';
import * as reportController from '../controllers/reportController';

const router = Router();

router.post('/', reportController.createReport);
router.get('/:reportId', reportController.getReportDetails);
router.put('/:reportId', reportController.updateReportDetails);
router.delete('/:reportId', reportController.deleteReport);

export default router;
