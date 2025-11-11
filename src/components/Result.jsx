import React from 'react';
import { CheckCircle } from 'lucide-react';
import '../styles/Result.css';

function Result({ result, resetTest }) {
  return (
    <section className="result-container">
      <div className="result-header">
        <CheckCircle className="result-icon" size={64} />
        <h2 className="result-title">
          ¡Encontramos tu match perfecto!
        </h2>
        <p className="result-description">
          Basándonos en tus respuestas, estas son las carreras que mejor se ajustan a tu perfil:
        </p>
      </div>

      <div className="result-careers">
        {result.careers.map((career, index) => (
          <div key={index} className="result-career-card">
            <div className="result-career-content">
              <div className="result-career-number">
                {index + 1}
              </div>
              <div className="result-career-info">
                <h3 className="result-career-name">{career.name}</h3>
                <p className="result-career-faculty">
                  📍 {career.faculty}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="result-action">
        <button
          onClick={resetTest}
          className="result-button"
        >
          Hacer el test nuevamente
        </button>
      </div>
    </section>
  );
}

export default Result;