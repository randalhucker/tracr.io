import { Router } from 'express';
import * as serverController from '../controllers/serverController';

const router = Router();

router.get('/uptime', serverController.getUptime);
router.get('/count', serverController.getCount);

export default router;
