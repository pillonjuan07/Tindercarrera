# Contenedor principal

.test-container {
  max-width: 768px;
  margin: 0 auto;
  padding: 48px 16px;
}

Centra el contenido del test y limita su ancho para una lectura cómoda.

Aplica padding vertical y horizontal para separar del borde de la pantalla.

.test-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 32px;
}

Caja blanca con bordes redondeados y sombra suave para destacar visualmente el contenido del test.

# Barra de progreso

.test-progress-container {
  margin-bottom: 24px;
}
.test-progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.test-progress-text {
  font-size: 14px;
  color: #6b7280;
}
.test-progress-percent {
  font-size: 14px;
  font-weight: 600;
  color: #2563eb;
}

Muestra el texto de progreso y el porcentaje actual, alineados horizontalmente.

.test-progress-bar {
  width: 100%;
  background-color: #e5e7eb;
  border-radius: 9999px;
  height: 8px;
  overflow: hidden;
}
.test-progress-fill {
  background: linear-gradient(to right, #2563eb, #0891b2);
  height: 100%;
  border-radius: 9999px;
  transition: width 0.3s ease;
}

Barra de progreso con fondo gris claro y relleno animado en gradiente azul.

El relleno se ajusta dinámicamente según el avance del test.

# Pregunta y opciones

.test-question {
  font-size: 24px;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 24px;
}

Muestra la pregunta actual con fuente grande y destacada.

.test-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.test-option {
  width: 100%;
  text-align: left;
  padding: 16px;
  border-radius: 8px;
  border: 2px solid #e5e7eb;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 16px;
  color: #374151;
}
.test-option:hover {
  border-color: #2563eb;
  background-color: #eff6ff;
  transform: scale(1.01);
}

Las opciones se presentan como botones grandes y accesibles.

Al pasar el mouse, cambian de color y se agrandan ligeramente para mejorar la interacción.

# Botón de retroceso

.test-back-button {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #4b5563;
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 24px;
  padding: 8px 0;
  transition: color 0.2s;
}
.test-back-button:hover {
  color: #2563eb;
}

Botón discreto para volver a la pregunta anterior.

Cambia a azul al pasar el mouse, manteniendo coherencia con el resto del diseño.