import React from 'react';
import ReactDOM from 'react-dom';
import MainTemplate from '../Components/MainTemplate';
import camelize from '../../camelize';

export interface Question {
  createdAt: string;
  updatedAt: string;
  id: number;
  quizId: number;
  answer: string;
  content: string;
}

export interface Quiz {
  createdAt: string;
  id: number;
  name: string;
  public: boolean;
  questions: Question[];
  updatedAt: string;
  userId: number;
}
const root = document.getElementById('root');
const data = camelize(JSON.parse(root.dataset.quizzes));

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

ReactDOM.render(
  <MainTemplate content={<QuizzesIndex quizzes={data} />} />,
  document.getElementById('root')
);
