// /src/components/AboutMe.jsx

// import dependencies
import React from 'react';
import '../styles/aboutme.css';

const AboutMe = () => {
  return (
    <div className = "aboutMeDiv">
      <h2>About Me</h2>
      <img src="../../images/tom.jpg" className = "tom" alt="picture of tom" />
      <p className = "aboutMeP" >Mr. Fusco has a batchelor degree in electrical engineering from University of Maryland. Mr. Fusco has thirty plus years of
        experience in the field of large scale Federal, DoD and Commercial systems integration at IBM and Lockheed Martin. Mr. Fusco has
        held various technical and program management assignments spanning the program life-cycle from research,
        to design and development, systems engineering to integration, and fielding of large-scale systems. Mr. Fusco retired from IBM in June 2022 and is now taking
        a bootcamp course in full stack web development at the University of Central Florida.
        Mr. Fusco hopes to transition to his passion for coding and believes he can bring great
        value to a company by working with development teams leveraging newly acquired coding skills with his
        deep engineering and management experience from his previous career.
      </p>
    </div>
  );
}

export default AboutMe;
