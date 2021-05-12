import React from 'react';
import Karuta from './Karuta/Karuta';
import { useAppDispatch, useAppSelector } from '../Hooks/Hooks';
import { setModal } from '../Components/Modal/modalSlice';
import { setCurrentGame } from './gameSlice';

const Games = ({ quizzes, currentUser }: { quizzes: Quiz[]; currentUser: CurrentUser | null }) => {
  const dispatch = useAppDispatch();
  const currentGame = useAppSelector((state) => state.game.currentGame);
  console.log(currentGame);

  return (
    <div className='Games'>
      <div className='quiz-links'></div>
      <button onClick={() => dispatch(setCurrentGame('KARUTA'))}>Karuta</button>
      {currentGame === 'KARUTA' && <Karuta quizzes={quizzes} />}
    </div>
  );
};

export default Games;
