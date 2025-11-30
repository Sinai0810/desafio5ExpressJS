import {Router} from 'express';
import {loginController} from '../src/controllers/loginController.js';

const router = Router();

// Ruta para login de usuario
router.post('/login', loginController);

export default router;