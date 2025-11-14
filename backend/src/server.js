// Importa Express para crear el servidor HTTP
// Importa CORS para permitir peticiones desde otros orígenes (como tu frontend)
// Importa las rutas de usuarios y tests
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import testRoutes from './routes/testRoutes.js';

// Inicializa la app de Express
const app = express();

// Define el puerto (usa variable de entorno o 5000 por defecto)
const PORT = process.env.PORT || 5000;

// 🛡️ Middlewares globales
app.use(cors());            // Habilita CORS para todas las rutas
app.use(express.json());    // Permite recibir JSON en las peticiones

// 📦 Rutas principales
app.use('/api/users', userRoutes);  // Rutas relacionadas con usuarios
app.use('/api/tests', testRoutes);  // Rutas relacionadas con tests vocacionales

// 🧪 Ruta de prueba para verificar que la API está activa
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

// ⚠️ Manejo de rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// 🚀 Inicia el servidor y muestra info en consola
app.listen(PORT, () => {
  console.log(`\n🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📊 API disponible en http://localhost:${PORT}/api`);
  console.log(`✅ Presiona Ctrl+C para detener\n`);
});
