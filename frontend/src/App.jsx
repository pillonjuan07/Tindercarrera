import React, { useState, useEffect } from 'react';
// Importar componentes (se importan desde los archivos originales; los componentes exportan en español)
import Encabezado from './components/Header';
import InicioSesion from './components/Login';
import Inicio from './components/Home';
import Prueba from './components/Test';
import Resultado from './components/Result';
import Historial from './components/History';
import { allQuestions } from './data/questions';
import { careerDatabase } from './data/careers';

// Componente principal de la app
function App() {
  // Sección 1: estados principales
  const [pantallaActual, setPantallaActual] = useState('login');
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState({});
  const [resultado, setResultado] = useState(null);
  const [preguntasSeleccionadas, setPreguntasSeleccionadas] = useState([]);
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [usuarioActual, setUsuarioActual] = useState(null);
  const [mostrarHistorial, setMostrarHistorial] = useState(false);
  const [todosLosUsuarios, setTodosLosUsuarios] = useState({});
  const [cargando, setCargando] = useState(false);

  // Sección 2: util - obtener preguntas aleatorias
  const obtenerPreguntasAleatorias = () => {
    const mezcladas = [...allQuestions].sort(() => Math.random() - 0.5);
    return mezcladas.slice(0, 20);
  };

  // Si entramos a la pantalla de prueba y no hay preguntas seleccionadas, las generamos
  useEffect(() => {
    if (preguntasSeleccionadas.length === 0 && pantallaActual === 'test') {
      setPreguntasSeleccionadas(obtenerPreguntasAleatorias());
    }
  }, [pantallaActual, preguntasSeleccionadas.length]);

  // Sección 3: obtener historial reciente de todos los usuarios (para mostrar en Home)
  const obtenerHistorialTodosUsuarios = () => {
    const usersData = [];
    Object.keys(todosLosUsuarios).forEach(userKey => {
      const user = todosLosUsuarios[userKey];
      if (user.testHistory && user.testHistory.length > 0) {
        user.testHistory.forEach((test, testIndex) => {
          usersData.push({
            username: user.username,
            userKey: userKey,
            testIndex: testIndex,
            date: test.date,
            careers: test.careers
          });
        });
      }
    });
    usersData.sort((a, b) => new Date(b.date) - new Date(a.date));
    return usersData.slice(0, 10);
  };

  // Sección 4: manejo de login
  const manejarIngreso = () => {
    if (nombreUsuario.trim() === '') {
      alert('Por favor, ingresá tu nombre de usuario');
      return;
    }

    setCargando(true);

    setTimeout(() => {
      const userKey = `user_${nombreUsuario.toLowerCase()}`;
      let userData = todosLosUsuarios[userKey];

      if (!userData) {
        userData = {
          username: nombreUsuario,
          testHistory: [],
          createdAt: new Date().toISOString()
        };
        setTodosLosUsuarios(prev => ({
          ...prev,
          [userKey]: userData
        }));
      }

      setUsuarioActual(userData);
      setPantallaActual('home');
      setCargando(false);
    }, 500);
  };

  // Sección 5: cerrar sesión
  const manejarCerrarSesion = () => {
    setUsuarioActual(null);
    setPantallaActual('login');
    setNombreUsuario('');
  };

  // Sección 6: respuestas y navegación durante la prueba
  const manejarRespuesta = (opcionSeleccionada) => {
    const nuevasRespuestas = { ...respuestas, [preguntaActual]: opcionSeleccionada };
    setRespuestas(nuevasRespuestas);

    if (preguntaActual < preguntasSeleccionadas.length - 1) {
      setPreguntaActual(preguntaActual + 1);
    } else {
      calcularResultado(nuevasRespuestas);
    }
  };

  // Sección 7: cálculo del resultado a partir de las respuestas
  const calcularResultado = (respuestasFinales) => {
    setCargando(true);

    setTimeout(() => {
      const puntuacionesCategorias = {};

      Object.values(respuestasFinales).forEach(answer => {
        answer.categories.forEach(category => {
          puntuacionesCategorias[category] = (puntuacionesCategorias[category] || 0) + 1;
        });
      });

      const categoriasOrdenadas = Object.entries(puntuacionesCategorias)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

      const carrerasRecomendadas = [];
      categoriasOrdenadas.forEach(([category]) => {
        if (careerDatabase[category]) {
          carrerasRecomendadas.push(...careerDatabase[category]);
        }
      });

      const resultadoTest = {
        date: new Date().toISOString(),
        careers: carrerasRecomendadas.slice(0, 3)
      };

      setResultado(resultadoTest);

      const userKey = `user_${usuarioActual.username.toLowerCase()}`;
      const usuarioActualizado = {
        ...usuarioActual,
        testHistory: [...usuarioActual.testHistory, resultadoTest]
      };

      setTodosLosUsuarios(prev => ({
        ...prev,
        [userKey]: usuarioActualizado
      }));

      setUsuarioActual(usuarioActualizado);
      setPantallaActual('result');
      setCargando(false);
    }, 1000);
  };

  // Sección 8: reiniciar / volver al home
  const reiniciarTest = () => {
    setPantallaActual('home');
    setPreguntaActual(0);
    setRespuestas({});
    setResultado(null);
    setPreguntasSeleccionadas([]);
  };

  const iniciarPrueba = () => {
    setPreguntasSeleccionadas(obtenerPreguntasAleatorias());
    setPantallaActual('test');
  };

  const irAtras = () => {
    if (preguntaActual > 0) {
      setPreguntaActual(preguntaActual - 1);
    }
  };

  // Sección 9: eliminar un elemento del historial del usuario actual
  const eliminarElementoHistorial = (indice) => {
    setCargando(true);

    setTimeout(() => {
      const userKey = `user_${usuarioActual.username.toLowerCase()}`;
      const historialActualizado = [...usuarioActual.testHistory];
      historialActualizado.splice(indice, 1);

      const usuarioActualizado = {
        ...usuarioActual,
        testHistory: historialActualizado
      };

      setTodosLosUsuarios(prev => ({
        ...prev,
        [userKey]: usuarioActualizado
      }));

      setUsuarioActual(usuarioActualizado);
      setCargando(false);
    }, 300);
  };

  // Render
  return (
    <div className="app">
      {cargando && (
        <div className="loading-overlay">
          <div className="loading-box">
            <div className="spinner"></div>
            <p>Cargando...</p>
          </div>
        </div>
      )}

      <Encabezado
        usuarioActual={usuarioActual}
        mostrarHistorial={mostrarHistorial}
        establecerMostrarHistorial={setMostrarHistorial}
        manejarCerrarSesion={manejarCerrarSesion}
      />

      <main>
        {pantallaActual === 'login' && (
          <InicioSesion
            nombreUsuario={nombreUsuario}
            establecerNombreUsuario={setNombreUsuario}
            manejarIngreso={manejarIngreso}
          />
        )}

        {pantallaActual === 'home' && !mostrarHistorial && (
          <Inicio
            iniciarPrueba={iniciarPrueba}
            historialUsuarios={obtenerHistorialTodosUsuarios()}
          />
        )}

        {pantallaActual === 'home' && mostrarHistorial && (
          <Historial
            usuarioActual={usuarioActual}
            establecerMostrarHistorial={setMostrarHistorial}
            iniciarPrueba={iniciarPrueba}
            eliminarElementoHistorial={eliminarElementoHistorial}
          />
        )}

        {pantallaActual === 'test' && preguntasSeleccionadas.length > 0 && (
          <Prueba
            preguntaActual={preguntaActual}
            preguntas={preguntasSeleccionadas}
            manejarRespuesta={manejarRespuesta}
            irAtras={irAtras}
          />
        )}

        {pantallaActual === 'result' && resultado && (
          <Resultado
            resultado={resultado}
            reiniciarTest={reiniciarTest}
          />
        )}
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <h4>TinderCarrera</h4>
              <p className="footer-text">Ayudando a estudiantes de Tucumán a encontrar su vocación desde 2025</p>
            </div>
            <div>
              <h4>Enlaces</h4>
              <ul className="footer-links">
                <li>
                  <a href="#inicio">Inicio</a>
                </li>
                <li>
                  <a href="#test">Test Vocacional</a>
                </li>
                <li>
                  <a href="#sobre-nosotros">Sobre Nosotros</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Contacto</h4>
              <p className="footer-text">
                ¿Tenés dudas? Escribinos a
                <br />
                <a href="mailto:info@tindercarrera.com">info@tindercarrera.com</a>
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 TinderCarrera. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;