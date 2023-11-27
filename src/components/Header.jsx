// /src/components/Header.jsx

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Tom Fusco</h1>
      <ul>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;