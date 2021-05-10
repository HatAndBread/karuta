import React from 'react';
import Nav from './Nav/Nav';
import EditQuiz from '../Quizzes/Edit';
import QuizzesIndex from '../Quizzes/Index';
import Home from '../Home';

type Props = {
  currentUser: CurrentUser;
  contentType: ContentType;
  data: any;
};
const MainTemplate = (props: Props) => {
  const getContent = () => {
    switch (props.contentType) {
      case 'quizEdit':
        return <EditQuiz quizData={props.data} />;
      case 'quizzesIndex':
        return <QuizzesIndex quizzes={props.data} />;
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
