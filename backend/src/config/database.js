// Importa el módulo sqlite3 para manejar la base de datos SQLite
// Importa utilidades para manejar rutas de archivos en módulos ES
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Obtiene la ruta absoluta del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Crea una conexión a la base de datos SQLite ubicada en ../../database.db
const db = new sqlite3.Database(
  join(__dirname, '../../database.db'),
  (err) => {
    if (err) {
      // Muestra error si no se pudo conectar
      console.error('❌ Error al conectar con la base de datos:', err);
    } else {
      // Confirma conexión exitosa y crea tablas si no existen
      console.log('✅ Conectado a la base de datos SQLite');
      initDatabase();
    }
  }
);

// Función que inicializa las tablas necesarias en la base de datos
function initDatabase() {
  // Tabla de usuarios con ID, nombre único y fecha de creación
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Tabla de tests vinculada a usuarios, con fecha
  db.run(`
    CREATE TABLE IF NOT EXISTS tests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      test_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `);

  // Tabla de carreras recomendadas vinculadas a tests
  db.run(`
    CREATE TABLE IF NOT EXISTS recommended_careers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      test_id INTEGER NOT NULL,
      career_name TEXT NOT NULL,
      faculty TEXT NOT NULL,
      position INTEGER NOT NULL,
      FOREIGN KEY (test_id) REFERENCES tests(id) ON DELETE CASCADE
    )
  `);
}

// Exporta la instancia de la base de datos para usarla en otros módulos
export default db;
