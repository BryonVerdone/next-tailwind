import React from 'react';

const Box = ({ text, color }) => {
  return (
    <article
      className={`flex justify-center items-center w-80 h-80 bg-${color}-500 text-black-500 text-4xl border-red-700 rounded-lg`}
    >
      {text}
    </article>
  );
};

export default Box;
