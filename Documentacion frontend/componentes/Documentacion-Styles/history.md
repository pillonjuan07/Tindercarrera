# Contenedor principal

.history-container {
  max-width: 896px;
  margin: 0 auto;
  padding: 48px 16px;
}

Centra el contenido y limita su ancho para mantener una lectura cómoda.

Aplica un padding generoso para separar el historial del borde de la pantalla.

# Tarjeta de historial

.history-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 32px;
}

Fondo blanco con bordes redondeados y sombra suave para destacar visualmente.

Padding interno para espaciar el contenido.

# Encabezado de historial

.history-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

Distribuye el título y el botón de volver en extremos opuestos.

Alinea verticalmente los elementos y separa del contenido siguiente.

.history-title {
  font-size: 30px;
  font-weight: bold;
  color: #1f2937;
}

Título grande y oscuro para jerarquía visual.

.history-back-btn {
  color: #4b5563;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  transition: color 0.2s;
  font-size: 16px;
}
.history-back-btn:hover {
  color: #2563eb;
}

Botón de volver con estilo minimalista y efecto hover azul.

# Estado vacío

.history-empty {
  text-align: center;
  padding: 48px 0;
}

Centra el contenido cuando no hay historial.

.history-empty-icon {
  color: #d1d5db;
  margin: 0 auto 16px;
}
.history-empty-text {
  color: #6b7280;
  font-size: 18px;
  margin-bottom: 16px;
}

Ícono y texto en tonos grises para indicar suavemente que no hay datos.

.history-empty-button {
  background-color: #2563eb;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 16px;
  margin-top: 16px;
}
.history-empty-button:hover {
  background-color: #1d4ed8;
}

Botón de acción destacado en azul, con efecto hover más oscuro.

# Lista de elementos

.history-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

Organiza los ítems en columna con separación entre ellos.

.history-item {
  border: 2px solid #bfdbfe;
  border-radius: 8px;
  padding: 24px;
  background-color: #dbeafe;
  transition: box-shadow 0.2s;
}
.history-item:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

Cada ítem tiene fondo celeste, borde azul claro y efecto hover con sombra.

# Encabezado de ítem

.history-item-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 16px;
}

Distribuye el título y el botón de eliminar en extremos opuestos.

.history-item-title {
  font-size: 20px;
  font-weight: bold;
  color: #1f2937;
}
.history-item-date {
  font-size: 14px;
  color: #6b7280;
  margin-top: 4px;
}

Título destacado y fecha en gris más tenue.

.history-delete-btn {
  color: #ef4444;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  transition: color 0.2s;
}
.history-delete-btn:hover {
  color: #dc2626;
}

Botón de eliminar en rojo, con efecto hover más intenso.

# Contenido del ítem

.history-item-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.history-item-subtitle {
  font-weight: 600;
  color: #374151;
  margin-bottom: 4px;
}

Subtítulos con peso medio y color gris oscuro.

# Detalles de carrera

.history-career {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background-color: white;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #bfdbfe;
}

Caja blanca con borde azul claro, usada para mostrar información de carreras o facultades.

.history-career-number {
  background-color: #2563eb;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-weight: bold;
  font-size: 14px;
}

Número circular azul con texto blanco, usado como índice o marcador.

.history-career-name {
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 4px;
}
.history-career-faculty {
  font-size: 14px;
  color: #4b5563;
}

Nombre de la carrera en gris oscuro y facultad en gris medio.
