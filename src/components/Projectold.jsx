// /src/components/Project.jsx

// import dependencies
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';


const Project = () => {
  return (
    <main>
      <section id="aboutme" className="section_topic">
        <h2>About Me</h2>
        <p>Mr Fusco has a batchelor degree ...</p>
      </section>
      <section id="work" className="section_topic">
        <h2>Portfolio</h2>

        {/* Horiseon project w/ live link */}
        <section className="card">
          <a href="https://smokerdog57.github.io/refactoring/" target="__blank">
            <header>Horiseon</header>
            <img src="../../images/digital-marketing-meeting.jpg" alt="Tablet" />
          </a>
        </section>

        {/* weather dashboard project w/ live link */}
        <section className="card">
          <a href="https://smokerdog57.github.io/weatherdashboard/" target="_blank">
            <header>WeatherApp</header>
            <img src="../../images/landingpage.png" alt="WeatherApp" />
          </a>
        </section>

        {/* your space social network project w/ live link */}
        <section className="card">
          <a href="https://your-space-b0e277e1dff1.herokuapp.com/home">
            <header>Your Space</header>
            <img src="../../images/Spaceman.PNG" alt="Picture of a Spaceman" />
          </a>
        </section>
      </section>

      {/* contact info */}
      <section id="contactme" className="section_topic">
        <h2>Contact Me</h2>
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
      </section>
    </main >
  );
}

export default Project;
