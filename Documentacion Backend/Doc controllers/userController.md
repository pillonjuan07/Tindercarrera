 ¿Qué hace este archivo?
Este módulo gestiona usuarios en la base de datos SQLite. Tiene dos funciones:
- createOrGetUser: busca un usuario por nombre o lo crea si no existe.
- getUserById: busca un usuario por su ID.

 Importación de la base
import db from '../config/database.js';


- Importa la conexión a la base de datos SQLite desde el archivo database.js.

 Función: createOrGetUser
export const createOrGetUser = (req, res) => { ... }


¿Qué hace?
- Recibe un nombre de usuario (username) desde el frontend.
- Verifica si el nombre es válido (no vacío).
- Normaliza el nombre (minúsculas y sin espacios).
- Busca si ya existe en la tabla users.
- Si existe, lo devuelve.
- Si no existe, lo crea y devuelve el nuevo usuario.
¿Cómo funciona?
const { username } = req.body;


- Extrae el nombre de usuario del cuerpo de la solicitud.
if (!username || username.trim() === '') { ... }


- Verifica que el nombre no esté vacío.
const normalizedUsername = username.toLowerCase().trim();


- Convierte el nombre a minúsculas y elimina espacios.
db.get('SELECT * FROM users WHERE username = ?', [normalizedUsername], ...)


- Busca el usuario en la base de datos.
db.run('INSERT INTO users (username) VALUES (?)', [normalizedUsername], ...)


- Si no existe, lo crea.
res.status(201).json({ ... })


- Devuelve el nuevo usuario con su ID y fecha de creación.

 Función: getUserById
export const getUserById = (req, res) => { ... }


¿Qué hace?

- Recibe un id por parámetro.
- Busca al usuario con ese ID en la base.
- Si lo encuentra, lo devuelve.
- Si no, responde con error 404.
¿Cómo funciona?
const { id } = req.params;


- Extrae el ID de la URL.
db.get('SELECT * FROM users WHERE id = ?', [id], ...)


- Busca el usuario por ID.
res.json({ id: user.id, username: user.username, createdAt: user.created_at });


- Devuelve los datos del usuario si existe.
