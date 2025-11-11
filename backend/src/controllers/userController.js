import db from '../config/database.js';

export const createOrGetUser = (req, res) => {
  const { username } = req.body;

  if (!username || username.trim() === '') {
    return res.status(400).json({ error: 'El nombre de usuario es requerido' });
  }

  const normalizedUsername = username.toLowerCase().trim();

  db.get(
    'SELECT * FROM users WHERE username = ?',
    [normalizedUsername],
    (err, user) => {
      if (err) {
        return res.status(500).json({ error: 'Error al buscar usuario' });
      }

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

      db.run(
        'INSERT INTO users (username) VALUES (?)',
        [normalizedUsername],
        function(err) {
          if (err) {
            return res.status(500).json({ error: 'Error al crear usuario' });
          }

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

export const getUserById = (req, res) => {
  const { id } = req.params;

  db.get(
    'SELECT * FROM users WHERE id = ?',
    [id],
    (err, user) => {
      if (err) {
        return res.status(500).json({ error: 'Error al buscar usuario' });
      }

      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      res.json({
        id: user.id,
        username: user.username,
        createdAt: user.created_at
      });
    }
  );
};