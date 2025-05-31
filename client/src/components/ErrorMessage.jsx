import React from 'react';

const ErrorMessage = ({ message }) => {
  if (!message) return null;
  return (
    <div className="bg-red-100 text-red-700 border border-red-400 px-4 py-2 rounded mb-4">
      {message}
    </div>
  );
};

export default ErrorMessage;