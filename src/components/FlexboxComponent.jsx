// FlexboxComponent.jsx
import React from 'react';
import ImageGroup from './ImageGroup'; // Import the new component
import '../styles/flexboxcomponent.css';

const FlexboxComponent = () => {
  const imageSources = [
    '../../images/digital-marketing-meeting.jpg',
    '../../images/landingpage.png',
    '../../images/Spaceman.PNG',
  ];

  return (
    <div className="flexbox-container">
      <header>
        <h1>Flexbox Example</h1>
      </header>
      {/* Use the ImageGroup component with the image sources */}
      <ImageGroup imageSources={imageSources} />
    </div>
  );
};

export default FlexboxComponent;