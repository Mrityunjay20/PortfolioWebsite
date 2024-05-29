// src/components/CopyButton.js
import React, { useState } from 'react';
import CustomAlert from './CustomAlert';

const CopyButton = ({ text }) => {
  const [showAlert, setShowAlert] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
      console('Text copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <>
    <button
      onClick={handleCopy}
      className="text-white mt-1 bg-red-500 w-full hover:bg-red-700 duration-300 rounded-2xl text-sm px-3 md:px-5 py-1 flex items-center justify-between"
    >
      <span className='mx-2'>mjxworks@gmail.com</span>
      <svg
        fill="#ffffff"
        height="20px"
        width="20px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 442 442"
        xmlSpace="preserve"
        stroke="#ffffff"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <polygon points="291,0 51,0 51,332 121,332 121,80 291,80 "></polygon>
            <polygon points="306,125 306,195 376,195 "></polygon>
            <polygon points="276,225 276,110 151,110 151,442 391,442 391,225 "></polygon>
          </g>
        </g>
      </svg>
    </button>
    <CustomAlert message="Email copied!" show={showAlert} />
    </>
  );
};

export default CopyButton;
