 ¿Qué hace este archivo?
Este archivo define las rutas del servidor relacionadas con los tests vocacionales. Usa Express para crear un router que conecta cada ruta con su función correspondiente del controlador testController.js.

 Importaciones
import express from 'express';
import {
  saveTestResult,
  getUserHistory,
  getRecentTests,
  deleteTest
} from '../controllers/testController.js';


- express: framework para crear el servidor y manejar rutas.
- testController.js: archivo que contiene las funciones que trabajan con la base de datos (guardar, consultar y eliminar tests).

 Crear el router
const router = express.Router();


- Crea una instancia de router para definir rutas específicas del módulo de tests.

 Definición de rutas
1. Guardar un test
router.post('/', saveTestResult);


- Ruta: POST /
- Acción: guarda un nuevo test vocacional y sus carreras recomendadas.

2. Obtener historial de un usuario
router.get('/user/:userId', getUserHistory);


- Ruta: GET /user/:userId
- Acción: devuelve todos los tests realizados por un usuario.

3. Obtener tests recientes
router.get('/recent', getRecentTests);


- Ruta: GET /recent
- Acción: muestra los últimos tests realizados por todos los usuarios.

4. Eliminar un test
router.delete('/:testId', deleteTest);


- Ruta: DELETE /:testId
- Acción: elimina un test específico por su ID.

 Exportar el router
export default router;


- Permite usar este router en el archivo principal del servidor (app.js o index.js).
