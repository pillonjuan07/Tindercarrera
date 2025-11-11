SECCIÓN 1: Importaciones 📚
__________________________________________________
javascriptimport React from 'react';
import { GraduationCap } from 'lucide-react';
import '../styles/Login.css';
_________________________________________________

¿Qué hace?

-Importa React
-Importa solo el ícono GraduationCap (birrete de graduación)
-Importa estilos específicos del Login


SECCIÓN 2: Props del Componente 🎯

javascriptfunction Login({ username, setUsername, handleLogin }) {
Props que recibe:

-username: String con el valor actual del input (estado controlado)

-setUsername: Función para actualizar el estado del username

-handleLogin: Función que ejecuta el proceso de login cuando el usuario confirma

-Patrón de Estado Controlado: El componente padre (App) maneja el estado, este componente solo lo muestra y modifica.

SECCIÓN 3: Estructura Base 🏗️
_______________________________________________________________

javascriptreturn (
  <section className="login-container">
    <div className="login-card">
      <GraduationCap className="login-icon" size={80} />
      <h2 className="login-title">Bienvenido a TinderCarrera</h2>
      <p className="login-subtitle">Ingresá tu nombre de usuario para comenzar</p>
_______________________________________________________________

¿Qué hace?

<section>: Contenedor semántico para toda la pantalla de login
login-card: Tarjeta centrada (típicamente con sombra y fondo)
Ícono de birrete grande (80px) - branding visual
Título de bienvenida
Subtítulo explicativo de qué hacer


SECCIÓN 4: Input Controlado 📝
_______________________________________________________________

javascript<input
  type="text"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
  placeholder="Tu nombre de usuario"
  className="login-input"
/>
_______________________________________________________________

¿Qué hace?

type="text": Campo de texto simple (no password)
value={username}:

-Input controlado por React
-El valor siempre viene del estado del padre
-React controla completamente el input

onChange={(e) => setUsername(e.target.value)}:

-Se ejecuta cada vez que el usuario escribe
e.target.value: Captura el nuevo texto del input
setUsername(): Actualiza el estado en el componente padre
Flujo: Tecleo → onChange → setUsername → re-render → value actualizado

onKeyPress={(e) => e.key === 'Enter' && handleLogin()}:

-Se ejecuta cuando el usuario presiona una tecla
e.key === 'Enter': Verifica si presionó Enter
&&: Operador de cortocircuito (solo ejecuta lo de la derecha si lo de la izquierda es true)
Si presiona Enter → ejecuta handleLogin()
UX mejorada: No necesitas hacer clic en el botón, puedes presionar Enter

-placeholder: Texto gris que aparece cuando el input está vacío

SECCIÓN 5: Botón de Login 🔘
________________________________
javascript<button
  onClick={handleLogin}
  className="login-button"
>
  Ingresar
</button>
__________________________________

¿Qué hace?

Botón simple que ejecuta handleLogin() al hacer clic
Misma funcionalidad que presionar Enter en el input
Texto claro y directo: "Ingresar"


SECCIÓN 6: Cierre y Exportación 📦
_______________________________
javascript      </div>
    </section>
  );
}

export default Login;
```
________________________________
¿Qué hace?

- Cierra la card y el section
- Exporta el componente para usarlo en App

---

## Flujo de Interacción 🔄

### **Escenario 1: Usuario escribe y hace clic**
```
1. Usuario escribe "juan" en el input

   └─→ onChange se ejecuta 4 veces (j, u, a, n)

   └─→ setUsername() actualiza el estado cada vez

   └─→ El input siempre muestra el valor actualizado

2. Usuario hace clic en "Ingresar"

   └─→ onClick ejecuta handleLogin()

   └─→ El padre procesa el login con username="juan"
```

### **Escenario 2: Usuario presiona Enter**
```
1. Usuario escribe "maria"

   └─→ onChange actualiza setUsername()

2. Usuario presiona Enter (sin hacer clic)

   └─→ onKeyPress detecta 'Enter'

   └─→ Ejecuta handleLogin() automáticamente

   └─→ Mismo resultado que hacer clic en el botón
```

---

## Visualización del Componente 🎨
```
╔══════════════════════════════════════╗
║                                      ║
║              🎓                      ║
║         (ícono 80px)                 ║
║                                      ║
║   Bienvenido a TinderCarrera        ║
║                                      ║
║   Ingresá tu nombre de usuario      ║
║   para comenzar                      ║
║                                      ║
║   ┌────────────────────────────┐    ║
║   │ Tu nombre de usuario       │    ║
║   └────────────────────────────┘    ║
║                                      ║
║        [ Ingresar ]                  ║
║                                      ║
╚══════════════════════════════════════╝