// /src/components/Project.jsx

// import dependencies
import React from 'react';

// reusable project component
const Project = ({ title, imageSrc, deployedLink, githubLink }) => {
  return (
    <div id = "work" className = "section_topic">
      <h2>Portfolio</h2>
      <div className="card">
        <h3>{title}</h3>
        <img src={imageSrc} alt={`Screenshot of ${title}`} />
        <div>
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">
            Deployed App
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;