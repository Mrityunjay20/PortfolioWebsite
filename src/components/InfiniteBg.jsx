import React from 'react';

const BackgroundAnimation = () => {
  const listItems = Array.from({ length: 60 }, (_, index) => {
    const size = Math.floor(Math.random() * 60) + 6; // Random size between 6px and 60px
    const delay = Math.random() * 50; // Random delay up to 202s
    const left = Math.random() * 100; // Random left position between 0% and 100%

    return (
      <li
        key={index}
        style={{
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          bottom: `-${size}px`,
          animationDelay: `${delay}s`,
        }}
        className="absolute bg-blue-300 bg-opacity-30 rounded-full animate-animate"
      ></li>
    );
  });

  return (
    <ul className="fixed -z-40 w-screen h-screen top-0 left-0 m-0 p-0 overflow-hidden">
      {listItems}
    </ul>
  );
};

export default BackgroundAnimation;
