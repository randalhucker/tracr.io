import { Router } from 'express';
import * as itemController from '../controllers/itemController';

const router = Router();

router.post('/', itemController.createItem);
router.get('/:itemId', itemController.getItemDetails);
router.put('/:itemId', itemController.updateItemDetails);
router.delete('/:itemId', itemController.deleteItem);

export default router;
