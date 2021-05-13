import KarutaCard from './KarutaCard';

import React from 'react';
const Karuta = ({ quizzes }: { quizzes: Quiz[] }) => {
  return (
    <div className='Karuta'>
      <div>
        <select>
          {quizzes.map((quiz) => (
            <option key={quiz.id} value={quiz.id}>
              {quiz.name}
            </option>
          ))}
        </select>
        <button>Start</button>
      </div>
    </div>
  );
};

export default Karuta;
