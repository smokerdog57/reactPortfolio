// /src/components/Header.jsx

// import dependencies
import React from 'react';
import Navigation from './Navigation';
import '../styles/header.css'

const Header = () => {
  return (
    <header>
      <h1>Tom Fusco</h1>
      <Navigation />
    </header>
  );
}

export default Header;