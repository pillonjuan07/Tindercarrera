import React from 'react';
import { ArrowLeft } from 'lucide-react';
import '../styles/Test.css';

function Test({ currentQuestion, questions, handleAnswer, goBack }) {
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="test-container">
      <div className="test-card">
        <div className="test-progress-container">
          <div className="test-progress-info">
            <span className="test-progress-text">
              Pregunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="test-progress-percent">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="test-progress-bar">
            <div
              className="test-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <h3 className="test-question">
          {questions[currentQuestion].question}
        </h3>

        <div className="test-options">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="test-option"
            >
              <span>{option.text}</span>
            </button>
          ))}
        </div>

        {currentQuestion > 0 && (
          <button
            onClick={goBack}
            className="test-back-button"
          >
            <ArrowLeft size={20} /> Volver
          </button>
        )}
      </div>
    </section>
  );
}

export default Test;