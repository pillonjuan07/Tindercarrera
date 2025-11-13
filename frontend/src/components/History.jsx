// Sección 1: imports
import React from 'react';
import { History as IconoHistorial, Trash2 as IconoBasura } from 'lucide-react';
import '../styles/History.css';

// Sección 2: componente Historial
// Sección 3: helpers y lógica local
function Historial({ usuarioActual, establecerMostrarHistorial, iniciarPrueba, eliminarElementoHistorial }) {
  const formatearFecha = (stringISO) => {
    const fecha = new Date(stringISO);
    return fecha.toLocaleDateString('es-AR', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Sección 4: render / estructura principal
  return (
    <section className="history-container">
      <div className="history-card">
        <div className="history-header">
          <h2 className="history-title">Mi Historial de Pruebas</h2>
          <button
            onClick={() => establecerMostrarHistorial(false)}
            className="history-back-btn"
          >
            Volver
          </button>
        </div>
         
        {usuarioActual.testHistory.length === 0 ? (       // Sección 5: estado vacío del historial
          <div className="history-empty">
            <IconoHistorial className="history-empty-icon" size={64} />
            <p className="history-empty-text">Todavía no realizaste ninguna prueba</p>
            <button
              onClick={() => {
                establecerMostrarHistorial(false);
                iniciarPrueba();
              }}
              className="history-empty-button"
            >
              Hacer mi primera prueba
            </button>
          </div>
        ) : (    //seccion 6
          <div className="history-list">  // Sección 6: listado de entradas del historial
            {usuarioActual.testHistory.slice().reverse().map((prueba, indice) => (  // Sección 7: item del historial (cada prueba)
              <div key={indice} className="history-item">   
                <div className="history-item-header">
                  <div>
                    <h3 className="history-item-title">
                      Prueba #{usuarioActual.testHistory.length - indice}
                    </h3>
                    <p className="history-item-date">{formatearFecha(prueba.date)}</p>
                  </div>
                  <button  // Sección 8: botón eliminar entrada
                    onClick={() => eliminarElementoHistorial(usuarioActual.testHistory.length - 1 - indice)}
                    className="history-delete-btn"
                  >
                    <IconoBasura size={20} />
                  </button>
              </div>  
                <div className="history-item-content">  
                  <h4 className="history-item-subtitle">Tus carreras recomendadas:</h4> 
                  {prueba.careers.map((carrera, indiceCarrera) => (  // Sección 9: listado de carreras por prueba
                    <div key={indiceCarrera} className="history-career">
                      <div className="history-career-number">
                        {indiceCarrera + 1}
                      </div>
                      <div>
                        <p className="history-career-name">{carrera.name}</p>
                        <p className="history-career-faculty">{carrera.faculty}</p>
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
// Sección 10: exportar componente
export default Historial;