 ¿Qué hace este archivo?
Este archivo configura y lanza el servidor principal de la aplicación TinderCarrera usando Express. Define los middlewares, las rutas disponibles, una ruta de prueba y el manejo de errores.

 Importaciones
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import testRoutes from './routes/testRoutes.js';


- express: framework para crear el servidor web.
- cors: permite que el frontend acceda a la API desde otro dominio.
- userRoutes y testRoutes: importan las rutas específicas para usuarios y tests.

 Configuración inicial
const app = express();
const PORT = process.env.PORT || 5000;


- Crea la aplicación Express.
- Define el puerto donde se ejecutará el servidor (por defecto 5000).

 Middlewares
app.use(cors());
app.use(express.json());


- cors(): habilita el acceso desde otros orígenes (como el frontend).
- express.json(): permite recibir datos en formato JSON desde el frontend.

 Rutas principales
app.use('/api/users', userRoutes);
app.use('/api/tests', testRoutes);


- /api/users: maneja las rutas relacionadas con usuarios.
- /api/tests: maneja las rutas relacionadas con tests vocacionales.

 Ruta de prueba
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


- Ruta base (/) que devuelve un mensaje de estado de la API.
- Útil para verificar que el servidor está funcionando.

 Manejo de errores 404
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});


- Captura cualquier ruta no definida y devuelve un error 404.

 Iniciar el servidor
app.listen(PORT, () => {
  console.log(`\n🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📊 API disponible en http://localhost:${PORT}/api`);
  console.log(`✅ Presiona Ctrl+C para detener\n`);
});


- Inicia el servidor en el puerto definido.
- Muestra mensajes en consola para confirmar que todo está funcionando.

¿Querés que te ayude a armar una introducción para el documento o una conclusión que resuma cómo se conectan todos los módulos? También puedo ayudarte a diagramar el flujo de rutas si lo necesitás.
