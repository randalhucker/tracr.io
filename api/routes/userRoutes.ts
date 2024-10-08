import { Router } from 'express';
import * as userController from '../controllers/userController';

const router = Router();

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUserDetails);
router.put('/:userId', userController.updateUserDetails);
router.delete('/:userId', userController.deleteUserAccount);
router.get('/:userId/claims', userController.getUserClaims);
router.get('/:userId/messages', userController.getUserMessages);

export default router;
