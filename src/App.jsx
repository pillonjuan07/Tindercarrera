import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Test from './components/Test';
import Result from './components/Result';
import History from './components/History';
import { allQuestions } from './data/questions';
import { careerDatabase } from './data/careers';

function App() {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [username, setUsername] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  const [allUsers, setAllUsers] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getRandomQuestions = () => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 20);
  };

  useEffect(() => {
    if (selectedQuestions.length === 0 && currentScreen === 'test') {
      setSelectedQuestions(getRandomQuestions());
    }
  }, [currentScreen, selectedQuestions.length]);

  const getAllUsersHistory = () => {
    const usersData = [];
    Object.keys(allUsers).forEach(userKey => {
      const user = allUsers[userKey];
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

  const handleLogin = () => {
    if (username.trim() === '') {
      alert('Por favor, ingresá tu nombre de usuario');
      return;
    }
    
    setIsLoading(true);
    
    setTimeout(() => {
      const userKey = `user_${username.toLowerCase()}`;
      let userData = allUsers[userKey];
      
      if (!userData) {
        userData = {
          username: username,
          testHistory: [],
          createdAt: new Date().toISOString()
        };
        setAllUsers(prev => ({
          ...prev,
          [userKey]: userData
        }));
      }
      
      setCurrentUser(userData);
      setCurrentScreen('home');
      setIsLoading(false);
    }, 500);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentScreen('login');
    setUsername('');
  };

  const handleAnswer = (selectedOption) => {
    const newAnswers = { ...answers, [currentQuestion]: selectedOption };
    setAnswers(newAnswers);

    if (currentQuestion < selectedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    setIsLoading(true);
    
    setTimeout(() => {
      const categoryScores = {};
      
      Object.values(finalAnswers).forEach(answer => {
        answer.categories.forEach(category => {
          categoryScores[category] = (categoryScores[category] || 0) + 1;
        });
      });

      const sortedCategories = Object.entries(categoryScores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

      const recommendedCareers = [];
      sortedCategories.forEach(([category]) => {
        if (careerDatabase[category]) {
          recommendedCareers.push(...careerDatabase[category]);
        }
      });

      const testResult = {
        date: new Date().toISOString(),
        careers: recommendedCareers.slice(0, 3)
      };

      setResult(testResult);

      const userKey = `user_${currentUser.username.toLowerCase()}`;
      const updatedUser = {
        ...currentUser,
        testHistory: [...currentUser.testHistory, testResult]
      };
      
      setAllUsers(prev => ({
        ...prev,
        [userKey]: updatedUser
      }));
      
      setCurrentUser(updatedUser);
      setCurrentScreen('result');
      setIsLoading(false);
    }, 1000);
  };

  const resetTest = () => {
    setCurrentScreen('home');
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
    setSelectedQuestions([]);
  };

  const startTest = () => {
    setSelectedQuestions(getRandomQuestions());
    setCurrentScreen('test');
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const deleteHistoryItem = (index) => {
    setIsLoading(true);
    
    setTimeout(() => {
      const userKey = `user_${currentUser.username.toLowerCase()}`;
      const updatedHistory = [...currentUser.testHistory];
      updatedHistory.splice(index, 1);
      
      const updatedUser = {
        ...currentUser,
        testHistory: updatedHistory
      };
      
      setAllUsers(prev => ({
        ...prev,
        [userKey]: updatedUser
      }));
      
      setCurrentUser(updatedUser);
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="app">
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-box">
            <div className="spinner"></div>
            <p>Cargando...</p>
          </div>
        </div>
      )}

      <Header 
        currentUser={currentUser}
        showHistory={showHistory}
        setShowHistory={setShowHistory}
        handleLogout={handleLogout}
      />

      <main>
        {currentScreen === 'login' && (
          <Login 
            username={username}
            setUsername={setUsername}
            handleLogin={handleLogin}
          />
        )}

        {currentScreen === 'home' && !showHistory && (
          <Home 
            startTest={startTest}
            allUsersHistory={getAllUsersHistory()}
          />
        )}

        {currentScreen === 'home' && showHistory && (
          <History 
            currentUser={currentUser}
            setShowHistory={setShowHistory}
            startTest={startTest}
            deleteHistoryItem={deleteHistoryItem}
          />
        )}

        {currentScreen === 'test' && selectedQuestions.length > 0 && (
          <Test 
            currentQuestion={currentQuestion}
            questions={selectedQuestions}
            handleAnswer={handleAnswer}
            goBack={goBack}
          />
        )}

        {currentScreen === 'result' && result && (
          <Result 
            result={result}
            resetTest={resetTest}
          />
        )}
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <h4>TinderCarrera</h4>
              <p className="footer-text">
                Ayudando a estudiantes de Tucumán a encontrar su vocación desde 2025
              </p>
            </div>
            <div>
              <h4>Enlaces</h4>
              <ul className="footer-links">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#test">Test Vocacional</a></li>
                <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
              </ul>
            </div>
            <div>
              <h4>Contacto</h4>
              <p className="footer-text">
                ¿Tenés dudas? Escribinos a<br />
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