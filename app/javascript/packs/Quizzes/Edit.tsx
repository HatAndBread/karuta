import React from 'react';
import ReactDOM from 'react-dom';
import { Quiz, Question } from './Index';
import camelize from '../../camelize';

const root = document.getElementById('root');
const data = camelize(JSON.parse(root.dataset.quiz));
console.log(data);

const EditQuiz = ({ quiz: Quiz }) => {
  return (
    <div className="EditQuiz">
      <div>Edit a quiz!</div>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<EditQuiz quiz={data} />, root);
});
