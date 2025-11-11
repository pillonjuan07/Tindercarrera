 Explicación paso a paso

1. Importaciones

import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


- sqlite3: permite trabajar con bases de datos SQLite.
- fileURLToPath, dirname, join: ayudan a construir rutas de archivos de forma segura y compatible.

2. Obtener ruta del archivo actual

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


- Como estás usando módulos ES (import), esto reemplaza lo que antes era __dirname en CommonJS.
- Sirve para saber dónde está el archivo actual y desde ahí ubicar la base de datos.

3. Conexión a la base de datos

const db = new sqlite3.Database(
  join(__dirname, '../../database.db'),
  (err) => {
    if (err) {
      console.error('❌ Error al conectar con la base de datos:', err);
    } else {
      console.log('✅ Conectado a la base de datos SQLite');
      initDatabase();
    }
  }
);


- Se conecta al archivo database.db ubicado dos carpetas arriba.
- Si hay error, lo muestra. Si no, llama a initDatabase() para crear las tablas.

4. Crear tablas si no existen

function initDatabase() {
  db.run(`CREATE TABLE IF NOT EXISTS users (...)`);
  db.run(`CREATE TABLE IF NOT EXISTS tests (...)`);
  db.run(`CREATE TABLE IF NOT EXISTS recommended_careers (...)`);
}


🧾 Tabla users
- Guarda usuarios con id, username único, y fecha de creación.
🧪 Tabla tests
- Guarda tests realizados por usuarios.
- Tiene user_id como clave foránea (relación con users).
🎓 Tabla recommended_careers
- Guarda carreras recomendadas por cada test.
- Tiene test_id como clave foránea (relación con tests).
- Incluye nombre de carrera, facultad y posición (ranking).

5. Exportar la base
export default db;


- Permite usar la conexión db en otros archivos del proyecto.
