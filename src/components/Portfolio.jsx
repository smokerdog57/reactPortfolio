// /src/components/Portfolio.jsx

import React from 'react';
import Project from './Project';

const Portfolio = () => {
  // Replace the dummy data with your actual project data
  const projects = [
    {
      title: 'Horiseon',
      imageSrc: '../../images/digital-marketing-meeting.jpg',
      deployedLink: 'https://smokerdog57.github.io/refactoring/',
      githubLink: 'https://github.com/smokerdog57/portfolio',
    },
    {
      title: 'WeatherApp',
      imageSrc: '../../images/landingpage.png',
      deployedLink: 'https://smokerdog57.github.io/weatherdashboard/',
      githubLink:  'https://github.com/smokerdog57/weatherdashboard/',
    },
    {
      title: 'Your Space',
      imageSrc: '../../images/Spaceman.PNG',
      deployedLink: 'https://your-space-b0e277e1dff1.herokuapp.com/home/',
      githubLink:  'https://github.com/alejandra-e-bernabel/YourSpace',
    },
    // Add more projects as needed
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default Portfolio;