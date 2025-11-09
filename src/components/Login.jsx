import React from 'react';
import { GraduationCap } from 'lucide-react';
import '../styles/Login.css';

function Login({ username, setUsername, handleLogin }) {
  return (
    <section className="login-container">
      <div className="login-card">
        <GraduationCap className="login-icon" size={80} />
        <h2 className="login-title">Bienvenido a TinderCarrera</h2>
        <p className="login-subtitle">Ingresá tu nombre de usuario para comenzar</p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
          placeholder="Tu nombre de usuario"
          className="login-input"
        />
        <button
          onClick={handleLogin}
          className="login-button"
        >
          Ingresar
        </button>
      </div>
    </section>
  );
}

export default Login;