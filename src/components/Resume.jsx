// /src/components/Resume.jsx

// import dependencies
import React from 'react';

const Resume = () => {
  return (
    <div>
      <h2>Resume</h2>
      <p>
        Download my resume{' '}
        <a href="https://drive.google.com/file/d/13n6R8ohVvVPByTsxdBnaa9oIUvmZfSIR/view?usp=sharing" download>
          here
        </a>
        .
      </p>

      <h3>front-end proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript (ES6+)</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>React.js</li>
        <li>Bootstrap</li>
      </ul>

      <h3>back-end proficiencies</h3>
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
