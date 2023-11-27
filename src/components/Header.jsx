// /src/components/Header.jsx

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Tom Fusco</h1>
      <nav>
        <a href="#about-me">About Me</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
        <a href="#resume">Resume</a>
      </nav>
    </header>
  );
}

export default Header;