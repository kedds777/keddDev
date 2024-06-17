import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <a href="/">MyApp</a>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Create Room</a></li>
          <li><a href="/room">Join Room</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
