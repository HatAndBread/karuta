import React, { useContext, createContext } from 'react';
import Nav from './Nav/Nav';
import EditQuiz from '../Quizzes/Edit';
import QuizzesIndex from '../Quizzes/Index';
import ShowQuiz from '../Quizzes/Show';
import Home from '../Home';

type Props = {
  currentUser: CurrentUser | null;
  contentType: ContentType;
  data: any;
};
const MainTemplate = (props: Props) => {
  const getContent = () => {
    switch (props.contentType) {
      case 'quizShow':
        return <ShowQuiz />;
      case 'quizNew':
        return (
          <EditQuiz
            quizData={props.data}
            currentUser={props.currentUser}
            newQuiz={true}
          />
        );
      case 'quizEdit':
        return (
          <EditQuiz
            quizData={props.data}
            currentUser={props.currentUser}
            newQuiz={false}
          />
        );
      case 'quizzesIndex':
        return (
          <QuizzesIndex quizzes={props.data} currentUser={props.currentUser} />
        );
      case 'home':
        return <Home />;
      default:
        return '';
    }
  };
  return (
    <div>
      <Nav currentUser={props.currentUser} />
      {getContent()}
    </div>
  );
};
export default MainTemplate;
