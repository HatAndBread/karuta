import React from 'react';
import Icon from '../Components/Icon/Icon';

const QuizzesIndex = ({ quizzes, currentUser }: { quizzes: Quiz[]; currentUser: CurrentUser | null }) => {
  console.log('This is the data', quizzes);
  return (
    <div>
      <a href={`/users/${currentUser.id}/quizzes/new`}>Create a new quiz</a>
      {quizzes.map((quiz) => {
        return (
          <a href={`/users/${quiz.userId}/quizzes/${quiz.id}/edit`} key={quiz.id}>
            {quiz.name}
          </a>
        );
      })}
      <div>This is the Quizzes index;</div>
    </div>
  );
};

export default QuizzesIndex;
