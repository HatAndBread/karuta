import React from 'react';
import Karuta from './Karuta/Karuta';
import { useSelector, useDispatch } from 'react-redux';

const Games = ({ quizzes, currentUser }: { quizzes: Quiz[]; currentUser: CurrentUser | null }) => {
  const currentGame = useSelector((state) => (state as any).currentGame);
  const dispatch = useDispatch();
  console.log(currentGame, 'Current Game!');
  return (
    <div className='Games'>
      <div className='quiz-links'></div>
      <button onClick={() => dispatch({ type: 'KARUTA' })}>Karuta</button>
      {currentGame === 'KARUTA' && <Karuta />}
    </div>
  );
};

export default Games;
