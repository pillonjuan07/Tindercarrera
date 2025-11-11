import React from 'react';
import { GraduationCap, ArrowRight, Users, User } from 'lucide-react';
import '../styles/Home.css';

function Home({ startTest, allUsersHistory }) {
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
    <>
      <section id="inicio" className="home-hero">
        <div className="home-content">
          <GraduationCap className="home-icon" size={80} />
          <h2 className="home-title">
            Encontrá tu carrera ideal en Tucumán
          </h2>
          <p className="home-description">
            Elegir qué estudiar nunca fue tan fácil. Hacé nuestro test vocacional y descubrí el match perfecto con tu futuro académico.
          </p>
          <button
            onClick={startTest}
            className="home-button"
          >
            Comenzar Test Vocacional <ArrowRight size={20} />
          </button>
        </div>

        <div className="home-features">
          <div className="feature-card">
            <div className="feature-emoji">📝</div>
            <h3>Respondé el test</h3>
            <p>20 preguntas diseñadas para conocer tus intereses y habilidades</p>
          </div>
          <div className="feature-card">
            <div className="feature-emoji">🎯</div>
            <h3>Descubrí tu match</h3>
            <p>Encontrá las carreras que mejor se ajustan a tu perfil</p>
          </div>
          <div className="feature-card">
            <div className="feature-emoji">🏛️</div>
            <h3>Conocé dónde estudiar</h3>
            <p>Información de facultades y universidades en Tucumán</p>
          </div>
        </div>
      </section>

      <section className="home-recent">
        <div className="recent-container">
          <div className="recent-header">
            <Users size={32} />
            <h2>Tests Realizados Recientemente</h2>
          </div>
          
          {allUsersHistory.length === 0 ? (
            <div className="recent-empty">
              <Users className="empty-icon" size={64} />
              <p className="empty-title">Todavía no hay tests realizados</p>
              <p className="empty-subtitle">¡Sé el primero en hacer el test!</p>
            </div>
          ) : (
            <div className="recent-grid">
              {allUsersHistory.map((entry, index) => (
                <div key={index} className="recent-card">
                  <div className="recent-card-header">
                    <User size={18} />
                    <span className="recent-username">{entry.username}</span>
                    <span className="recent-date">{formatDate(entry.date)}</span>
                  </div>
                  <div className="recent-careers">
                    {entry.careers.slice(0, 3).map((career, cIndex) => (
                      <div key={cIndex} className="recent-career">
                        <span className="career-number">{cIndex + 1}.</span>
                        <div>
                          <p className="career-name">{career.name}</p>
                          <p className="career-faculty">{career.faculty}</p>
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

      <section id="sobre-nosotros" className="home-about">
        <div className="about-container">
          <h2 className="about-title">Sobre Nosotros</h2>
          <div className="about-content">
            <p>
              Elegir una carrera universitaria es una de las decisiones más trascendentes en la vida de una persona.
              En <strong>TinderCarrera</strong> entendemos que este proceso no siempre es sencillo: la diversidad de opciones,
              la falta de información clara y la incertidumbre sobre el futuro profesional pueden generar dudas y confusión.
            </p>
            <p>
              Por eso, hemos creado una plataforma pensada para acompañarte en este camino, brindándote orientación
              a través de un test vocacional completo que analiza tus intereses, habilidades y aspiraciones.
            </p>
            <p>
              Nuestro propósito es simple pero ambicioso: <strong>ayudar a cada estudiante a encontrar la carrera
              que mejor refleje sus intereses, habilidades y aspiraciones</strong>. No solo te mostramos dónde estudiar,
              sino que también te explicamos qué es cada carrera, cuál es su propósito y cuáles son sus posibles
              salidas laborales.
            </p>
            <p className="about-highlight">
              Tu futuro no debería depender del azar: merece una elección informada, responsable y alineada con tus sueños.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;