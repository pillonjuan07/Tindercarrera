// Importa la instancia de la base de datos SQLite
import db from '../config/database.js';

// Crea un usuario nuevo o devuelve uno existente según el nombre
export const createOrGetUser = (req, res) => {
  const { username } = req.body;

  // Valida que el nombre de usuario no esté vacío
  if (!username || username.trim() === '') {
    return res.status(400).json({ error: 'El nombre de usuario es requerido' });
  }

  // Normaliza el nombre (minúsculas y sin espacios)
  const normalizedUsername = username.toLowerCase().trim();

  // Busca si el usuario ya existe
  db.get(
    'SELECT * FROM users WHERE username = ?',
    [normalizedUsername],
    (err, user) => {
      if (err) {
        return res.status(500).json({ error: 'Error al buscar usuario' });
      }

      // Si existe, lo devuelve
      if (user) {
        return res.json({
          message: 'Usuario encontrado',
          user: {
            id: user.id,
            username: user.username,
            createdAt: user.created_at
          }
        });
      }

      // Si no existe, lo crea
      db.run(
        'INSERT INTO users (username) VALUES (?)',
        [normalizedUsername],
        function(err) {
          if (err) {
            return res.status(500).json({ error: 'Error al crear usuario' });
          }

          // Devuelve el nuevo usuario creado
          res.status(201).json({
            message: 'Usuario creado exitosamente',
            user: {
              id: this.lastID,
              username: normalizedUsername,
              createdAt: new Date().toISOString()
            }
          });
        }
      );
    }
  );
};

// Busca un usuario por su ID
export const getUserById = (req, res) => {
  const { id } = req.params;

  db.get(
    'SELECT * FROM users WHERE id = ?',
    [id],
    (err, user) => {
      if (err) {
        return res.status(500).json({ error: 'Error al buscar usuario' });
      }

      // Si no se encuentra, devuelve 404
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      // Devuelve los datos del usuario
      res.json({
        id: user.id,
        username: user.username,
        createdAt: user.created_at
      });
    }
  );
};
