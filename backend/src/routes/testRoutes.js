// Importa Express para definir rutas HTTP
import express from 'express';

// Importa los controladores que manejan la lógica de cada ruta
import { 
  saveTestResult,       // Guarda un nuevo test vocacional
  getUserHistory,       // Obtiene historial de tests por usuario
  getRecentTests,       // Lista los tests más recientes
  deleteTest            // Elimina un test por ID
} from '../controllers/testController.js';


const router = express.Router();   // Crea un router modular de Express


router.post('/', saveTestResult);  // Ruta POST para guardar un nuevo test


router.get('/user/:userId', getUserHistory);  // Ruta GET para obtener historial de un usuario específico


router.get('/recent', getRecentTests);  // Ruta GET para obtener los tests más recientes


router.delete('/:testId', deleteTest);  // Ruta DELETE para eliminar un test por su ID


export default router;  // Exporta el router para usarlo en la app principal
