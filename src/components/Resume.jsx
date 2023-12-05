// /src/components/Resume.jsx

// import dependencies
import React from 'react';
import "../styles/resume.css";

const Resume = () => {
  return (
    <div className = "resume-container">
      <h2>Resume</h2>
      <p className="resume-link">
        Download my resume{' '}
        <a href="https://drive.google.com/file/d/13n6R8ohVvVPByTsxdBnaa9oIUvmZfSIR/view?usp=sharing" download>
          here
        </a>
      </p>

      <h3>Front-end Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript (ES6+)</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>React.js</li>
        <li>Bootstrap</li>
      </ul>

      <h3>Back-end Proficiencies</h3>
      <ul>
        <li>APIs</li>
        <li>Graphql</li>
        <li>Express.js</li>
        <li>Node.js</li>
        <li>MySQL Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST, GrpahQL</li>
      </ul>

    </div>
  );
};

export default Resume;
