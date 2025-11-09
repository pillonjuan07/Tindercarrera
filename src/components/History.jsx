import React from 'react';
import { History as HistoryIcon, Trash2 } from 'lucide-react';
import '../styles/History.css';

function History({ currentUser, setShowHistory, startTest, deleteHistoryItem }) {
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('es-AR', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section className="history-container">
      <div className="history-card">
        <div className="history-header">
          <h2 className="history-title">Mi Historial de Tests</h2>
          <button
            onClick={() => setShowHistory(false)}
            className="history-back-btn"
          >
            Volver
          </button>
        </div>
        
        {currentUser.testHistory.length === 0 ? (
          <div className="history-empty">
            <HistoryIcon className="history-empty-icon" size={64} />
            <p className="history-empty-text">Todavía no realizaste ningún test</p>
            <button
              onClick={() => {
                setShowHistory(false);
                startTest();
              }}
              className="history-empty-button"
            >
              Hacer mi primer test
            </button>
          </div>
        ) : (
          <div className="history-list">
            {currentUser.testHistory.slice().reverse().map((test, index) => (
              <div key={index} className="history-item">
                <div className="history-item-header">
                  <div>
                    <h3 className="history-item-title">
                      Test #{currentUser.testHistory.length - index}
                    </h3>
                    <p className="history-item-date">{formatDate(test.date)}</p>
                  </div>
                  <button
                    onClick={() => deleteHistoryItem(currentUser.testHistory.length - 1 - index)}
                    className="history-delete-btn"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
                <div className="history-item-content">
                  <h4 className="history-item-subtitle">Tus carreras recomendadas:</h4>
                  {test.careers.map((career, cIndex) => (
                    <div key={cIndex} className="history-career">
                      <div className="history-career-number">
                        {cIndex + 1}
                      </div>
                      <div>
                        <p className="history-career-name">{career.name}</p>
                        <p className="history-career-faculty">{career.faculty}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default History;