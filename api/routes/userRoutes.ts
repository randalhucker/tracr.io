import { Router } from 'express';
import * as userController from '../controllers/userController';

const router = Router();

router.post('/', userController.createUser);
router.get('/:userId', userController.getUserDetails);
router.put('/:userId', userController.updateUserDetails);
router.delete('/:userId', userController.deleteUserAccount);

export default router;
