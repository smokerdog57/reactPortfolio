// ImageGroup.jsx
import React from 'react';

const ImageGroup = ({ imageSources }) => {
  return (
    <div className="flexbox-body">
      {imageSources.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index + 1}`} className="flex-image" />
      ))}
    </div>
  );
};

export default ImageGroup;