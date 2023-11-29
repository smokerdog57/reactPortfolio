// /src/components/Footer.jsx

// import dependencies
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
     <p>
          <a href="mailto:smokerdog57@gmail.com">
            <FaEnvelope size={30} />
          </a>
          <a href="https://github.com/smokerdog57/reactPortfolio" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/tom-fusco/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </p>
    </footer>
  );
}

export default Footer;
