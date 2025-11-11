# Encabezado principal

.header {
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

Fondo blanco con una sombra sutil para dar profundidad.

position: sticky fija el header en la parte superior al hacer scroll.

z-index: 1000 asegura que quede por encima del resto del contenido.

# Contenedor interno

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

Centra el contenido y limita su ancho.

Usa flexbox para distribuir el logo a la izquierda y las acciones a la derecha.

# Logo y título

.header-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header-logo svg {
  color: #2563eb;
}

.header-logo h1 {
  font-size: 24px;
  font-weight: bold;
  color: #1f2937;
}

El logo y el título están alineados horizontalmente con espacio entre ellos.

El ícono (svg) se pinta de azul y el texto tiene un tamaño grande y color gris oscuro.

# Acciones del usuario

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

Agrupa los botones y elementos del usuario con separación entre ellos.

# Botones de acción

.header-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #4b5563;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
  padding: 8px;
}

.header-btn:hover {
  color: #2563eb;
}


Botones sin borde ni fondo, con íconos y texto alineados.

Cambian de color al pasar el mouse para indicar interactividad.

# Texto del botón (responsive)

.header-btn-text {
  display: none;
}

@media (min-width: 768px) {
  .header-btn-text {
    display: inline;
  }
}

Oculta el texto de los botones en pantallas pequeñas.

Lo muestra a partir de 768px para mejorar la experiencia en escritorio

# Información del usuario

.header-user {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #374151;
}

.header-user span {
  font-weight: 600;
}


Muestra el nombre o datos del usuario con estilo sobrio y peso medio.

# Botón de logout

.logout-btn:hover {
  color: #dc2626;
}


Cambia a rojo al pasar el mouse para destacar la acción de cerrar sesión.