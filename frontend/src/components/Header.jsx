// Sección 1: imports
import React from 'react';
import {
  GraduationCap as IconoGorroGraduacion,
  History as IconoHistorial,
  User as IconoUsuario,
  LogOut as IconoCerrarSesion,
} from 'lucide-react';
import '../styles/Header.css';

// Sección 2: componente Encabezado (Header)
// Este componente muestra el logo, el nombre de la app,
// y las acciones del usuario (ver historial, nombre de usuario, cerrar sesión).
function Encabezado({ usuarioActual, mostrarHistorial, establecerMostrarHistorial, manejarCerrarSesion }) {
  return (
    <header className="header">
      <div className="header-container">
        {/* Sección 3: logo y título */}
        <div className="header-logo">
          <IconoGorroGraduacion size={32} />
          <h1>TinderCarrera</h1>
        </div>

        {/* Sección 4: acciones del header (solo muestra si hay usuario logueado) */}
        <div className="header-actions">
          {usuarioActual && (
            <>
              {/* Botón para mostrar/ocultar el historial de pruebas */}
              <button
                onClick={() => establecerMostrarHistorial(!mostrarHistorial)}
                className="header-btn"
              >
                <IconoHistorial size={20} />
                <span className="header-btn-text">Mi Historial</span>
              </button>

              {/* Información del usuario (nombre de usuario) */}
              <div className="header-user">
                <IconoUsuario size={20} />
                <span>{usuarioActual.username}</span>
              </div>

              {/* Botón para cerrar sesión */}
              <button
                onClick={manejarCerrarSesion}
                className="header-btn logout-btn"
                aria-label="Cerrar sesión"
              >
                <IconoCerrarSesion size={20} />
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

// Exportar el componente traducido
export default Encabezado;