import { Router } from 'express';
import * as claimController from '../controllers/claimController';

const router = Router();

router.post('/', claimController.createClaim);
router.get('/:claimId', claimController.getClaimDetails);
router.put('/:claimId', claimController.updateClaimDetails);
router.delete('/:claimId', claimController.deleteClaim);

export default router;
