// src/components/CustomAlert.js
import React from 'react';

const CustomAlert = ({ message, show }) => {
  if (!show) return null;

  return (
    <div
      className="absolute flex w-max items-center px-4 mb-1 mt-2 text-sm text-white border border-blue-300 rounded-xl bg-blue-50 dark:bg-gray-900 dark:text-white dark:border-blue-100"
      role="alert"
    >
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
};

export default CustomAlert;
