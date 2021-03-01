import { Router } from 'express';
import languageController from '../../../controllers/languageController';

const router = new Router();

router.post('/', languageController.store);

export default router;
