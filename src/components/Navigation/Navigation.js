import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav className={`fixed-nav ${isDarkMode ? 'dark-mode' : ''}`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Despre</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/gallery">Galerie</Link>
        </li>
        <li>
          <Link to="/pricetables">Preturi</Link>
        </li>
      </ul>
      {/* <button onClick={() => window.scrollTo(0, 0)}>UP</button>
      <button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
        DOWN
      </button> */}
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Mod Light' : 'Mod Dark'}
      </button>
    </nav>
  );
};

export default Navigation;
