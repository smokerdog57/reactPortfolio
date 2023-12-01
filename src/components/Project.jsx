// /src/components/Project.jsx

// import dependencies
import React from 'react';
import '../styles/project.css';

// reusable project component
const Project = ({ title, imageSrc, deployedLink, githubLink }) => {
  return (
    <div className="project-outer-container">
      <div className="project-card-flex-container">
        <img src={imageSrc} alt={`Screenshot of ${title}`} className="project-image" />
        <div className="project-card-overlay">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="project-title">
            {title}
          </a>
          <div className="project-links">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <span className="link-text">GitHub Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;