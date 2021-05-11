import React from 'react';
import Karuta from './Karuta/Karuta';

const Games = ({ quizzes, currentUser }: { quizzes: Quiz[]; currentUser: CurrentUser | null }) => {
  return (
    <div className='Games'>
      <div className='quiz-links'></div>
    </div>
  );
};

export default Games;
