import { Router } from 'express';
import * as notificationController from '../controllers/notificationController';

const router = Router();

router.post('/', notificationController.createNotification);
router.get('/:notificationId', notificationController.getNotificationDetails);
router.put('/:notificationId', notificationController.updateNotificationDetails);
router.delete('/:notificationId', notificationController.deleteNotification);

export default router;
