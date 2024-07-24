import React, {useState} from 'react';
import AuthService from './AuthService';
import '../styleSheets/Header.css';

const Header = () => {
  const [user, setUser] = useState(AuthService.getCurrentUser());

  const handleLogout = () => {
    AuthService.logout();
    setUser(null);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <a href="/">MyApp</a>
        </div>
          {user ? (
            <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/logIn">Log In</a></li>
          </ul>
          ) : (
            <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/logout">Log Out</a></li>
          </ul>
          )}
        
      </nav>
    </header>
  );
};

export default Header;