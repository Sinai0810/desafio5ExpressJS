import { Router } from "express";
import {createUserController, getUserController}  from '../src/controllers/userController.js';
import {verifyTokenMiddleware} from '../middleware/verifyTokenMiddleware.js';

const router = Router ();

//Ruta para crear usuario 
router.post ('/usuarios' , createUserController);

// Ruta para obtener usuario autenticado
router.get('/usuarios', verifyTokenMiddleware, getUserController);
export default router;








