import React from "react";
import { useSelector } from "react-redux";

const Answers = ({ score }) => {
  const { highScores } = useSelector((state) => state);

  return (
    <div className='min-w-full'>
      <div className='bg-gray-400 p-10 rounded-md shadow-md flex flex-col mt-40'>
        <p className='text-5xl text-center'>Vous avez obtenu</p>
        <p className='text-4xl text-center mt-2'>
          <b>{score}</b> points 🎉
        </p>
        <div className='' />
        <div className='mt-24 border-gray-300 border-b-2'>
          <p className='text-3xl mb-7'>Tout mes scores</p>
          {highScores.length > 0 &&
            highScores.map((item, index) => (
              <div key={index} className='mb-3'>
                <p className='text-xl font-medium text-white mx-7 text-right'>
                  Partie {index + 1} - {item} points
                </p>
              </div>
            ))}
        </div>
        <div className='result text-right'>
          <p className='text-2xl font-medium text-white mx-7 mt-2'>
            {highScores.reduce((total, item) => total + item, 0)} points au
            total
          </p>
        </div>
      </div>
    </div>
  );
};

export default Answers;
