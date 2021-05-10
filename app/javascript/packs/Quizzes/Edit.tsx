import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Quiz, Question } from './Index';
import Icon from '../Components/Icon/Icon';
import addIcon from '../../../assets/images/add.png';
import axios from 'axios';
import QuestionForm from '../Components/Quizzes/QuestionForm';
import MainTemplate from '../Components/MainTemplate';
import setupToken from '../../token';
import camelize from '../../camelize';
import snakeize from '../../snakeize';
import { cloneDeep } from 'lodash';

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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addNew = () => {
    const updatedQuestions = [...quiz.questions, { answer: '', content: '' }];
    const quizCopy = cloneDeep(quiz);
    quizCopy.questions = updatedQuestions;
    setQuiz(quizCopy);
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
            key={index}
          />
        ))}
        <button type="submit">Edit</button>
        <Icon src={addIcon} textAlt="+" clickCallback={addNew} />
      </form>
    </div>
  );
};

ReactDOM.render(<MainTemplate content={<EditQuiz quizData={data} />} />, root);
