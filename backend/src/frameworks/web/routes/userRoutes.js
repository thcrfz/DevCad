import { Router } from 'express';
import userController from '../../../controllers/userController';
import authorization from '../../middleware/authorization';

const router = new Router();

router.post('/', userController.store);
router.get('/', authorization, userController.index);
router.get('/:id', authorization, userController.show);

export default router;
