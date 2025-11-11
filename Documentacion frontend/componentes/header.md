
SECCIÓN 1: Importaciones 📚
________________________________________________________________________
javascriptimport React from 'react';
import { GraduationCap, History, User, LogOut } from 'lucide-react';
import '../styles/Header.css';
________________________________________________________________________

¿Qué hace?

-Importa React
-Importa 4 iconos de lucide-react:

    -GraduationCap: Birrete de graduación (logo)
    -History: Ícono de historial
    -User: Ícono de usuario
    -LogOut: Ícono de cerrar sesión


Importa estilos CSS del header


SECCIÓN 2: Props del Componente 🎯

javascriptfunction Header({ currentUser, showHistory, setShowHistory, handleLogout }) {
Props que recibe:

_currentUser: Objeto del usuario logueado (o null si no hay sesión)

-showHistory: Boolean que indica si se está mostrando el historial

_setShowHistory: Función para alternar la vista de historial
handleLogout: Función para cerrar sesión


SECCIÓN 3: Estructura Base 🏗️

__________________________________________
javascriptreturn (
  <header className="header">
    <div className="header-container">
    _______________________________________
    

¿Qué hace?

<header>: Elemento semántico HTML5 para la cabecera
header-container: Contenedor interno para controlar el layout


SECCIÓN 4: Logo y Título 🎨

____________________________________________
javascript<div className="header-logo">
  <GraduationCap size={32} />
  <h1>TinderCarrera</h1>
</div>
____________________________________________

¿Qué hace?

-Sección izquierda del header
-Muestra ícono de birrete (32px) + nombre de la app
-Siempre visible, tengas o no sesión iniciada


SECCIÓN 5: Renderizado Condicional - Acciones 🔐

_____________________________________________
javascript<div className="header-actions">
  {currentUser && (
    <>
    __________________________________________

¿Qué hace?

-currentUser &&: Operador de cortocircuito lógico
-Solo renderiza el contenido si currentUser existe (usuario logueado)
-Si no hay usuario logueado, esta sección queda vacía
<>...</>: Fragment de React para agrupar múltiples elementos sin agregar nodos DOM extra


SECCIÓN 6: Botón de Historial 📜
________________________________________________
javascript<button
  onClick={() => setShowHistory(!showHistory)}
  className="header-btn"
>
  <History size={20} />
  <span className="header-btn-text">Mi Historial</span>
</button>
________________________________________________

¿Qué hace?

-Botón que alterna (toggle) la vista de historial
!showHistory: Invierte el valor boolean

Si showHistory = false → lo pone en true (muestra historial)
Si showHistory = true → lo pone en false (oculta historial)


Muestra ícono + texto "Mi Historial"


SECCIÓN 7: Información del Usuario 👤
______________________________________________
javascript<div className="header-user">
  <User size={20} />
  <span>{currentUser.username}</span>
</div>
______________________________________________

¿Qué hace?

-Muestra el nombre del usuario logueado
-No es clickeable, solo informativo
-Combina ícono de usuario + nombre (ej: "juan_perez")


SECCIÓN 8: Botón de Logout 🚪
______________________________________
javascript<button
  onClick={handleLogout}
  className="header-btn logout-btn"
>
  <LogOut size={20} />
</button>
______________________________________

¿Qué hace?

-Botón para cerrar sesión
-Al hacer clic ejecuta handleLogout (definida en componente padre)
-Solo muestra el ícono, sin texto (diseño minimalista)
-Clase adicional logout-btn para estilos específicos


SECCIÓN 9: Cierre y Exportación 📦
___________________________________
javascript            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
```
____________________________________

**¿Qué hace?**
- Cierra el Fragment (`</>`)
- Cierra el condicional `{currentUser && (...)}`
- Cierra todos los divs y el header
- Exporta el componente

---

## Flujo Visual del Componente 🎭

### **Usuario NO logueado:**
```
┌─────────────────────────────────────┐
│ 🎓 TinderCarrera                    │
└─────────────────────────────────────┘
```

### **Usuario logueado:**
```
┌──────────────────────────────────────────────────────┐
│ 🎓 TinderCarrera    📜 Mi Historial  👤 juan  🚪    │
└──────────────────────────────────────────────────────┘
