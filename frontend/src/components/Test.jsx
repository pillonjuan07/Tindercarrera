// Sección 1: imports
import React from 'react';
import { ArrowLeft as IconoFlechaIzquierda } from 'lucide-react';
import '../styles/Test.css';

// Sección 2: componente Prueba
// Muestra la pregunta actual, opciones, barra de progreso y botón para volver.
function Prueba({ preguntaActual, preguntas, manejarRespuesta, irAtras }) {
  // Sección 3: cálculo de progreso (en porcentaje)
  const progreso = ((preguntaActual + 1) / preguntas.length) * 100;

  return (
    <section className="test-container">
      <div className="test-card">
        {/* Sección 4: barra y texto de progreso */}
        <div className="test-progress-container">
          <div className="test-progress-info">
            <span className="test-progress-text">
              Pregunta {preguntaActual + 1} de {preguntas.length}
            </span>
            <span className="test-progress-percent">{Math.round(progreso)}%</span>
          </div>
          <div className="test-progress-bar">
            <div className="test-progress-fill" style={{ width: `${progreso}%` }} />
          </div>
        </div>

        {/* Sección 5: pregunta actual */}
        <h3 className="test-question">{preguntas[preguntaActual].question}</h3>

        {/* Sección 6: opciones de respuesta */}
        <div className="test-options">
          {preguntas[preguntaActual].options.map((opcion, indice) => (
            <button
              key={indice}
              onClick={() => manejarRespuesta(opcion)}
              className="test-option"
            >
              <span>{opcion.text}</span>
            </button>
          ))}
        </div>

        {/* Sección 7: botón para volver a la pregunta anterior (si aplica) */}
        {preguntaActual > 0 && (
          <button onClick={irAtras} className="test-back-button">
            <IconoFlechaIzquierda size={20} /> Volver
          </button>
        )}
      </div>
    </section>
  );
}

export default Prueba;