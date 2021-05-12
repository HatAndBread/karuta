import React, { useContext, createContext } from 'react';
import Games from '../Games/Games';
import Nav from './Nav/Nav';
import EditQuiz from '../Quizzes/Edit';
import QuizzesIndex from '../Quizzes/Index';
import ShowQuiz from '../Quizzes/Show';
import Home from '../Home';
import ModalRouter from './Modal/ModalRouter';
import { useAppSelector, useAppDispatch } from '../Hooks/Hooks';
import { setModal } from './Modal/modalSlice';

type Props = {
  currentUser: CurrentUser | null;
  contentType: ContentType;
  data: any;
};
const MainTemplate = (props: Props) => {
  const dispatch = useAppDispatch();
  const modalCurrentlyOpen = useAppSelector((state) => state.modal.modalName);
  const getContent = () => {
    switch (props.contentType) {
      case 'quizShow':
        return <ShowQuiz />;
      case 'quizNew':
        return <EditQuiz quizData={props.data} currentUser={props.currentUser} newQuiz={true} />;
      case 'quizEdit':
        return <EditQuiz quizData={props.data} currentUser={props.currentUser} newQuiz={false} />;
      case 'quizzesIndex':
        return <QuizzesIndex quizzes={props.data} currentUser={props.currentUser} />;
      case 'home':
        return <Home />;
      case 'games':
        return <Games quizzes={props.data} currentUser={props.currentUser} />;
      default:
        return '';
    }
  };
  return (
    <div>
      <ModalRouter />
      <button onClick={() => dispatch(setModal('WARN'))}>Modal Down!</button>
      <Nav currentUser={props.currentUser} />
      {getContent()}
    </div>
  );
};
export default MainTemplate;
