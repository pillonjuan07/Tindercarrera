// Sección 1: imports
import React from 'react';
import { CheckCircle as IconoCheck } from 'lucide-react';
import '../styles/Result.css';

// Sección 2: componente Resultado
// Muestra los resultados del test: lista de carreras recomendadas y acción para reiniciar.
function Resultado({ resultado, reiniciarTest }) {
  return (
    <section className="result-container">
      {/* Sección 3: encabezado de resultado */}
      <div className="result-header">
        <IconoCheck className="result-icon" size={64} />
        <h2 className="result-title">¡Encontramos tu match perfecto!</h2>
        <p className="result-description">
          Basándonos en tus respuestas, estas son las carreras que mejor se ajustan a tu perfil:
        </p>
      </div>

      {/* Sección 4: listado de carreras resultantes */}
      <div className="result-careers">
        {resultado.careers.map((carrera, indice) => (
          <div key={indice} className="result-career-card">
            <div className="result-career-content">
              <div className="result-career-number">{indice + 1}</div>
              <div className="result-career-info">
                <h3 className="result-career-name">{carrera.name}</h3>
                <p className="result-career-faculty">📍 {carrera.faculty}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sección 5: acción para reiniciar el test */}
      <div className="result-action">
        <button onClick={reiniciarTest} className="result-button">
          Hacer el test nuevamente
        </button>
      </div>
    </section>
  );
}

export default Resultado;