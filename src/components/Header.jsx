import React from 'react';
import { GraduationCap, History, User, LogOut } from 'lucide-react';
import '../styles/Header.css';

function Header({ currentUser, showHistory, setShowHistory, handleLogout }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <GraduationCap size={32} />
          <h1>TinderCarrera</h1>
        </div>
        <div className="header-actions">
          {currentUser && (
            <>
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="header-btn"
              >
                <History size={20} />
                <span className="header-btn-text">Mi Historial</span>
              </button>
              <div className="header-user">
                <User size={20} />
                <span>{currentUser.username}</span>
              </div>
              <button
                onClick={handleLogout}
                className="header-btn logout-btn"
              >
                <LogOut size={20} />
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;