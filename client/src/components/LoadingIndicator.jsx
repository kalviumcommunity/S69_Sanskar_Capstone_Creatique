// src/components/LoadingIndicator.jsx
import React from 'react';

const LoadingIndicator = () => {
  return (
    <div className="flex justify-center items-center py-5">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
};

export default LoadingIndicator;