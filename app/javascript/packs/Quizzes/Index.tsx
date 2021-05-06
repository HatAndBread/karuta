import React from 'react';
import ReactDOM from 'react-dom';
import camelize from '../../camelize';
import snakeize from '../../snakeize';

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

console.log('This is the data', data);
const QuizzesIndex = () => {
  return (
    <div>
      <div>This is the Quizzes index;</div>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<QuizzesIndex />, document.getElementById('root'));
});
