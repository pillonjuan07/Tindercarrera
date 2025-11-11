# Contenedor general

.result-container {
  max-width: 896px;
  margin: 0 auto;
  padding: 48px 16px;
}

Centra el contenido y limita el ancho para una lectura cómoda.

Aplica padding vertical y horizontal para separar del borde de la pantalla.

# Encabezado de resultados

.result-header {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 32px;
  text-align: center;
  margin-bottom: 32px;
}

Caja blanca con bordes redondeados y sombra suave.

Centra el contenido y lo separa visualmente del resto.

.result-icon {
  color: #10b981;
  margin: 0 auto 16px;
}
.result-title {
  font-size: 30px;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 16px;
}
.result-description {
  color: #4b5563;
  margin-bottom: 32px;
  line-height: 1.6;
}

Ícono verde, título grande y descripción clara en gris medio.

# Lista de carreras sugeridas

.result-careers {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

Organiza las tarjetas de carrera en columna con separación entre ellas.

# Tarjeta de carrera

.result-career-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 24px;
  border: 2px solid #bfdbfe;
  transition: box-shadow 0.2s;
}
.result-career-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

Fondo blanco con borde azul claro y efecto hover con sombra más intensa.

# Contenido interno

.result-career-content {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}
.result-career-number {
  background-color: #2563eb;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-weight: bold;
  font-size: 18px;
}

Número circular azul con texto blanco, usado como índice o marcador.

.result-career-info {
  flex: 1;
}
.result-career-name {
  font-size: 20px;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 8px;
}
.result-career-faculty {
  font-size: 14px;
  font-weight: 600;
  color: #2563eb;
}

Nombre de la carrera destacado y facultad en azul con peso medio.

# Acción final

.result-action {
  text-align: center;
}
.result-button {
  background: linear-gradient(to right, #2563eb, #0891b2);
  color: white;
  padding: 12px 32px;
  border-radius: 9999px;
  border: none;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
}
.result-button:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
}

Botón con gradiente azul, estilo pill (border-radius: 9999px) y animación al hacer hover.

Centrado para cerrar la sección con una acción clara (como volver o continuar).