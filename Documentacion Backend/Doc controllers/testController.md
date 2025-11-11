 ¿Qué hace este archivo?
Este archivo define funciones para guardar, consultar y eliminar tests vocacionales en una base de datos SQLite. Se conecta a la base y ejecuta consultas según lo que pide el frontend.

 Importación de la base
import db from '../config/database.js';


- Importa la conexión a la base de datos SQLite que configuraste antes.

 Función: saveTestResult
export const saveTestResult = (req, res) => { ... }


¿Qué hace?

- Guarda un nuevo test en la base de datos.
- Recibe userId y una lista de careers desde el frontend.
- Inserta el test en la tabla tests.
- Luego guarda cada carrera recomendada en recommended_careers.
¿Cómo funciona?
- Usa db.serialize() para ejecutar las consultas en orden.
- Guarda el test y obtiene su testId.
- Usa db.prepare() para insertar cada carrera con ese testId.
- Finaliza y responde con éxito o error.

 Función: getUserHistory
export const getUserHistory = (req, res) => { ... }


¿Qué hace?
- Devuelve el historial de tests de un usuario.
¿Cómo funciona?
- Recibe el userId por parámetro.
- Busca todos los tests y sus carreras recomendadas.
- Agrupa los resultados por test.
- Devuelve un array con cada test y sus carreras.

 Función: getRecentTests
export const getRecentTests = (req, res) => { ... }


¿Qué hace?
- Muestra los últimos tests realizados por todos los usuarios.
¿Cómo funciona?
- Recibe un limit (por defecto 10).
- Busca los tests más recientes con nombre de usuario y carreras.
- Agrupa los datos por test.
- Devuelve los primeros limit.

 Función: deleteTest
export const deleteTest = (req, res) => { ... }


¿Qué hace?
- Elimina un test por su ID.
¿Cómo funciona?
- Recibe el testId por parámetro.
- Borra el test de la tabla tests.
- Si no existe, devuelve error 404.
- Si se elimina, responde con éxito.
 Gracias al ON DELETE CASCADE, también se eliminan las carreras asociadas automáticamente.


