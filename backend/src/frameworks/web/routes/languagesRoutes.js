import { Router } from 'express';
import languageController from '../../../controllers/languageController';
import authorization from '../../middleware/authorization';

const router = new Router();

router.post('/', languageController.store);

export default router;
