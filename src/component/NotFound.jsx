// src/NotFound.js
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-400">404</h1>
        <p className="text-2xl font-semibold text-gray-600 mb-4">
          Oops! Page not found.
        </p>
        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
