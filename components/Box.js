import React from 'react';

const Box = ({ text, bgColor, textColor }) => {
  return (
    <article
      className={`flex justify-center items-center w-80 h-80 ${bgColor} ${textColor} text-4xl  rounded-lg`}
    >
      {text}
    </article>
  );
};

export default Box;
