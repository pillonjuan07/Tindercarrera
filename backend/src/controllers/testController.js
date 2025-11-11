import db from '../config/database.js';

export const saveTestResult = (req, res) => {
  const { userId, careers } = req.body;

  if (!userId || !careers || !Array.isArray(careers)) {
    return res.status(400).json({ error: 'Datos inválidos' });
  }

  db.serialize(() => {
    db.run(
      'INSERT INTO tests (user_id) VALUES (?)',
      [userId],
      function(err) {
        if (err) {
          return res.status(500).json({ error: 'Error al guardar test' });
        }

        const testId = this.lastID;
        const stmt = db.prepare(
          'INSERT INTO recommended_careers (test_id, career_name, faculty, position) VALUES (?, ?, ?, ?)'
        );

        careers.forEach((career, index) => {
          stmt.run(testId, career.name, career.faculty, index + 1);
        });

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
    [limit * 3],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Error al obtener tests recientes' });
      }

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

      res.json(Object.values(tests).slice(0, limit));
    }
  );
};

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