import { Router } from 'express';
import developerController from '../../../controllers/developerController';
import authorization from '../../middleware/authorization';

const router = new Router();

router.post('/', developerController.store);
router.get('/', developerController.index);
router.get('/:id', developerController.show);
router.put('/:id', developerController.update);
router.delete('/:id', developerController.delete);

export default router;
