import { Router } from 'express';
import * as buildingController from '../controllers/buildingController';

const router = Router();

router.post('/', buildingController.createBuilding);
router.get('/:buildingId', buildingController.getBuildingDetails);
router.put('/:buildingId', buildingController.updateBuildingDetails);
router.delete('/:buildingId', buildingController.deleteBuilding);

export default router;
