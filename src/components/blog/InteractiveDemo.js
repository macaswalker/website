// src/components/blog/InteractiveDemo.js
import React from 'react';

// This component is a simple container for interactive demos
const InteractiveDemo = ({ children }) => {
  return (
    <div className="my-6 bg-white border border-gray-300 rounded-md overflow-hidden">
      {children}
    </div>
  );
};

export default InteractiveDemo;