// Sección 1: imports
import React from 'react';
import { GraduationCap as IconoGorroGraduacion } from 'lucide-react';
import '../styles/Login.css';

// Sección 2: componente Inicio de sesión
// Muestra el formulario simple para ingresar con un nombre de usuario.
function InicioSesion({ nombreUsuario, establecerNombreUsuario, manejarIngreso }) {
  return (
    <section className="login-container">
      <div className="login-card">
        {/* Sección 3: icono y título */}
        <IconoGorroGraduacion className="login-icon" size={80} />
        <h2 className="login-title">Bienvenido a TinderCarrera</h2>
        <p className="login-subtitle">Ingresá tu nombre de usuario para comenzar</p>

        {/* Sección 4: input de usuario */}
        <input
          type="text"
          value={nombreUsuario}
          onChange={(e) => establecerNombreUsuario(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && manejarIngreso()}
          placeholder="Tu nombre de usuario"
          className="login-input"
        />

        {/* Sección 5: botón de ingreso */}
        <button onClick={manejarIngreso} className="login-button">
          Ingresar
        </button>
      </div>
    </section>
  );
}

export default InicioSesion;