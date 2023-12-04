// /src/components/Footer.jsx

// import dependencies
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer>
      <p>
        <a href="mailto:smokerdog57@gmail.com" className="icon-link">
          <FaEnvelope size={30} />
        </a>
        <a href="https://github.com/smokerdog57/reactPortfolio" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/tom-fusco/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaLinkedin size={30} />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
