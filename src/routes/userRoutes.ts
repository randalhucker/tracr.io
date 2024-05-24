import { Router } from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/userController';

// The Router class from Express is used to create a new router object. 
const router = Router();

// The router object is used to define the routes for the user resource.
router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
