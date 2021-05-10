import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Quiz, Question } from './Index';
import axios from 'axios';
import QuestionForm from '../Components/Quizzes/QuestionForm';
import MainTemplate from '../Components/MainTemplate';
import setupToken from '../../token';
import camelize from '../../camelize';
import snakeize from '../../snakeize';

const root = document.getElementById('root');
const data = camelize(JSON.parse(root.dataset.quiz));

setupToken();

const EditQuiz = ({ quizData }: { quizData: Quiz }) => {
  const [quiz, setQuiz] = useState(quizData);
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    axios
      .patch(`/users/${quiz.userId}/quizzes/${quiz.id}`, snakeize(quiz))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log(quiz, '🌈');
  }, [quiz]);
  return (
    <div className="EditQuiz">
      <form onSubmit={handleSubmit}>
        {quiz.questions.map((question, index) => (
          <QuestionForm
            quiz={quiz}
            setQuiz={setQuiz}
            index={index}
            content={question.content}
            answer={question.answer}
            key={question.id}
          />
        ))}
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

ReactDOM.render(<MainTemplate content={<EditQuiz quizData={data} />} />, root);
