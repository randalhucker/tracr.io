import { Router } from 'express';
import * as claimController from '../controllers/claimController';

const router = Router();

router.post('/', claimController.createClaim);
router.get('/:userId', claimController.getClaims);
router.get('/:claimId', claimController.getClaimDetails);
router.put('/:claimId', claimController.updateClaimDetails);
router.delete('/:claimId', claimController.deleteClaim);
router.delete('/', claimController.deleteAllClaims);

export default router;
