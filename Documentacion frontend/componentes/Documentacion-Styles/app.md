# Reset general

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

Elimina márgenes y rellenos por defecto en todos los elementos.

Usa box-sizing: border-box para que el ancho y alto incluyan el padding y el borde, lo que facilita el diseño responsivo y evita desbordes inesperados.

# Tipografía y suavizado

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

Define una pila de fuentes modernas y del sistema para mejorar la legibilidad en distintos dispositivos.

Aplica suavizado de texto para una apariencia más nítida en navegadores WebKit y Firefox.

# Contenedor principal .app

.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #e0f2fe 0%, #cffafe 50%, #e0f2fe 100%);
}


Asegura que la app ocupe toda la altura de la ventana.

Aplica un fondo con gradiente diagonal en tonos celestes, generando una estética suave y moderna.

# Área principal main

main {
  min-height: calc(100vh - 200px);
}

Define una altura mínima para el contenido principal, dejando espacio para el footer (aproximadamente 200px).

# Pantalla de carga (.loading-overlay)

Fondo y centrado

.loading-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

Cubre toda la pantalla con fondo semitransparente.

Centra el contenido de carga vertical y horizontalmente.

Usa z-index alto para superponerse a todo lo demás.

# Caja de carga

.loading-box {
  background-color: white;
  border-radius: 8px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

Caja blanca con bordes redondeados y padding generoso.

Contiene el spinner y el texto de carga, alineados en columna.

# Spinner animado

.spinner {
  border: 3px solid #f3f3f3;
  border-top: 3px solid #2563eb;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
}

Círculo con borde gris claro y parte superior azul.

Gira indefinidamente gracias a la animación spin.

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

Define la animación de rotación continua.

# Texto de carga

.loading-box p {
  color: #374151;
  font-weight: 500;
}

Texto gris oscuro con peso medio, ubicado debajo del spinner.

# Footer

.footer {
  background-color: #1f2937;
  color: white;
  padding: 32px 16px;
  margin-top: 64px;
}

Fondo oscuro, texto blanco, con padding amplio.

Se separa del contenido principal con un margen superior.

# Grid de secciones

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  margin-bottom: 24px;
}

Centra el contenido y lo organiza en columnas responsivas.

Cada columna tiene un ancho mínimo de 250px y se adapta al espacio disponible.

# Títulos y texto

.footer h4 {
  font-weight: bold;
  margin-bottom: 12px;
}

.footer-text {
  color: #9ca3af;
  font-size: 14px;
  line-height: 1.6;
}

Títulos destacados y texto en gris claro, con buena legibilidad.

# Enlaces

.footer-text a {
  color: #60a5fa;
  text-decoration: none;
}
.footer-text a:hover {
  text-decoration: underline;
}

Enlaces azules sin subrayado por defecto, que se subrayan al pasar el mouse.

.footer-links {
  list-style: none;
}
.footer-links li {
  margin-bottom: 8px;
}
.footer-links a {
  color: #9ca3af;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.2s;
}
.footer-links a:hover {
  color: #60a5fa;
}

Lista de enlaces sin viñetas, con estilo similar al texto general.

Cambian de color al hacer hover para mejorar la interacción.

# Pie final

.footer-bottom {
  border-top: 1px solid #374151;
  padding-top: 24px;
  text-align: center;
}

.footer-bottom p {
  font-size: 14px;
  color: #9ca3af;
}

Sección inferior con borde superior y texto centrado.

Ideal para derechos de autor o notas legales.
