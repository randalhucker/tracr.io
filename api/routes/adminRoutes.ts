import { Router } from 'express';
import * as adminController from '../controllers/adminController';

const router = Router();

router.post('/', adminController.createAdmin);
router.get('/:adminId', adminController.getAdminDetails);
router.put('/:adminId', adminController.updateAdminDetails);
router.delete('/:adminId', adminController.deleteAdmin);

export default router;
