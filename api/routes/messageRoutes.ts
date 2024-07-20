import { Router } from 'express';
import * as messageController from '../controllers/messageController';

const router = Router();

router.post('/', messageController.createMessage);
router.get('/:messageId', messageController.getMessageDetails);
router.put('/:messageId', messageController.updateMessageDetails);
router.delete('/:messageId', messageController.deleteMessage);

export default router;
