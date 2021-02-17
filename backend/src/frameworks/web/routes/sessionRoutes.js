import { Router } from 'express';
import sessionController from '../../../controllers/sessionController';

const router = new Router();

router.get('/', sessionController.index);

export default router;
