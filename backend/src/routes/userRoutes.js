// Importa Express para definir rutas HTTP
// Importa los controladores que gestionan usuarios
import express from 'express';
import { createOrGetUser, getUserById } from '../controllers/userController.js';

const router = express.Router();  // Crea un router modular de Express

router.post('/login', createOrGetUser);  // Ruta POST para crear o recuperar un usuario por nombre (login simplificado)

router.get('/:id', getUserById);  // Ruta GET para obtener datos de un usuario por su ID

export default router;  // Exporta el router para integrarlo en la app principal

