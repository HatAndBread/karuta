import React from 'react';

const QuizzesIndex = ({ quizzes }: { quizzes: Quiz[] }) => {
  console.log('This is the data', quizzes);
  return (
    <div>
      {quizzes.map((quiz) => {
        return (
          <a
            href={`/users/${quiz.userId}/quizzes/${quiz.id}/edit`}
            key={quiz.id}
          >
            {quiz.name}
          </a>
        );
      })}
      <div>This is the Quizzes index;</div>
    </div>
  );
};

export default QuizzesIndex;
