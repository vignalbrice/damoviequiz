import React from "react";

const Answers = ({ score }) => {
  return (
    <div className='bg-white p-10 rounded-md shadow-md justify-center items-center'>
      <p>Voici votre score</p>
      <p>{score}</p>
    </div>
  );
};

export default Answers;
