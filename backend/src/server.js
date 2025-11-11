import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import testRoutes from './routes/testRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/tests', testRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 API de TinderCarrera funcionando correctamente',
    version: '1.0.0',
    endpoints: {
      users: '/api/users',
      tests: '/api/tests'
    }
  });
});

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`\n🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📊 API disponible en http://localhost:${PORT}/api`);
  console.log(`✅ Presiona Ctrl+C para detener\n`);
});