// Importa la instancia de la base de datos SQLite
import db from '../config/database.js';

// Guarda el resultado de un test vocacional
export const saveTestResult = (req, res) => {
  const { userId, careers } = req.body;

  // Valida que los datos sean correctos
  if (!userId || !careers || !Array.isArray(careers)) {
    return res.status(400).json({ error: 'Datos inválidos' });
  }

  // Ejecuta operaciones en serie para asegurar el orden
  db.serialize(() => {
    // Inserta el test en la tabla 'tests'
    db.run(
      'INSERT INTO tests (user_id) VALUES (?)',
      [userId],
      function(err) {
        if (err) {
          return res.status(500).json({ error: 'Error al guardar test' });
        }

        const testId = this.lastID; // ID del test recién creado

        // Prepara la inserción de carreras recomendadas
        const stmt = db.prepare(
          'INSERT INTO recommended_careers (test_id, career_name, faculty, position) VALUES (?, ?, ?, ?)'
        );

        // Inserta cada carrera con su posición
        careers.forEach((career, index) => {
          stmt.run(testId, career.name, career.faculty, index + 1);
        });

        // Finaliza la inserción y responde al cliente
        stmt.finalize((err) => {
          if (err) {
            return res.status(500).json({ error: 'Error al guardar carreras' });
          }

          res.status(201).json({
            message: 'Test guardado exitosamente',
            testId: testId
          });
        });
      }
    );
  });
};

// Obtiene el historial de tests de un usuario
export const getUserHistory = (req, res) => {
  const { userId } = req.params;

  db.all(
    `SELECT 
      t.id as test_id,
      t.test_date,
      rc.career_name,
      rc.faculty,
      rc.position
    FROM tests t
    LEFT JOIN recommended_careers rc ON t.id = rc.test_id
    WHERE t.user_id = ?
    ORDER BY t.test_date DESC, rc.position ASC`,
    [userId],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Error al obtener historial' });
      }

      // Agrupa los resultados por test
      const tests = {};
      rows.forEach(row => {
        if (!tests[row.test_id]) {
          tests[row.test_id] = {
            testId: row.test_id,
            date: row.test_date,
            careers: []
          };
        }
        if (row.career_name) {
          tests[row.test_id].careers.push({
            name: row.career_name,
            faculty: row.faculty,
            position: row.position
          });
        }
      });

      res.json(Object.values(tests));
    }
  );
};

// Obtiene los tests más recientes (limit configurable)
export const getRecentTests = (req, res) => {
  const limit = req.query.limit || 10;

  db.all(
    `SELECT 
      u.username,
      t.id as test_id,
      t.test_date,
      rc.career_name,
      rc.faculty,
      rc.position
    FROM tests t
    JOIN users u ON t.user_id = u.id
    LEFT JOIN recommended_careers rc ON t.id = rc.test_id
    ORDER BY t.test_date DESC, rc.position ASC
    LIMIT ?`,
    [limit * 3], // Multiplica por 3 para cubrir carreras por test
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Error al obtener tests recientes' });
      }

      // Agrupa por test y usuario
      const tests = {};
      rows.forEach(row => {
        if (!tests[row.test_id]) {
          tests[row.test_id] = {
            username: row.username,
            testId: row.test_id,
            date: row.test_date,
            careers: []
          };
        }
        if (row.career_name) {
          tests[row.test_id].careers.push({
            name: row.career_name,
            faculty: row.faculty
          });
        }
      });

      // Devuelve solo los tests completos hasta el límite
      res.json(Object.values(tests).slice(0, limit));
    }
  );
};

// Elimina un test por ID
export const deleteTest = (req, res) => {
  const { testId } = req.params;

  db.run(
    'DELETE FROM tests WHERE id = ?',
    [testId],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Error al eliminar test' });
      }

      if (this.changes === 0) {
        return res.status(404).json({ error: 'Test no encontrado' });
      }

      res.json({ message: 'Test eliminado exitosamente' });
    }
  );
};
