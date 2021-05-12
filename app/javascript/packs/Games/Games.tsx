import React from 'react';
import Karuta from './Karuta/Karuta';
import { useAppDispatch, useAppSelector } from '../Hooks/Hooks';
import { setModal } from '../Components/Modal/modalSlice';

const Games = ({ quizzes, currentUser }: { quizzes: Quiz[]; currentUser: CurrentUser | null }) => {
  const dispatch = useAppDispatch();
  const openModal = useAppSelector((state) => state.modal.modalName);
  console.log(openModal);

  return (
    <div className='Games'>
      <div className='quiz-links'></div>
      <button onClick={() => dispatch(setModal('KARUTA'))}>Karuta</button>
      {openModal === 'KARUTA' && <Karuta quizzes={quizzes} />}
    </div>
  );
};

export default Games;
