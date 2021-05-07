import React from 'react';
import ReactDOM from 'react-dom';
import { Quiz, Question } from './Index';
import QuestionForm from '../Components/Quizzes/QuestionForm';
import MainTemplate from '../Components/MainTemplate';
import camelize from '../../camelize';

const root = document.getElementById('root');
const data = camelize(JSON.parse(root.dataset.quiz));

const EditQuiz = ({ quiz }: { quiz: Quiz }) => {
  console.log(quiz, 'HO!');
  return (
    <div className="EditQuiz">
      <div>Edit a quiz!</div>
      {quiz.questions.map((question) => (
        <QuestionForm
          content={question.content}
          answer={question.answer}
          key={question.id}
        />
      ))}
    </div>
  );
};

ReactDOM.render(<MainTemplate content={<EditQuiz quiz={data} />} />, root);
