import React, { useState, useEffect } from 'react';
import Icon from '../Components/Icon/Icon';
import addIcon from '../../../assets/images/add.png';
import axios from 'axios';
import QuestionForm from '../Components/Quizzes/QuestionForm';
import snakeize from '../../snakeize';
import { cloneDeep } from 'lodash';

const EditQuiz = ({
  quizData,
  currentUser,
  newQuiz
}: {
  quizData: Quiz;
  currentUser: CurrentUser | null;
  newQuiz: boolean;
}) => {
  const [quiz, setQuiz] = useState(quizData);
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (newQuiz) {
      axios
        .post(`/users/${quiz.userId}/quizzes/`, snakeize(quiz))
        .then((res) => {
          if (res.data.path) {
            window.location.href = res.data.path;
          }
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .patch(`/users/${quiz.userId}/quizzes/${quiz.id}`, snakeize(quiz))
        .then((res) => setQuiz(res.data))
        .catch((err) => console.log(err));
    }
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
        <input
          type="text"
          value={quiz.name ? quiz.name : ''}
          onChange={(e) => {
            const quizCopy = cloneDeep(quiz);
            quizCopy.name = e.target.value;
            setQuiz(quizCopy);
          }}
        />
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
        <button type="submit">Save</button>
        <Icon src={addIcon} textAlt="+" clickCallback={addNew} />
      </form>
    </div>
  );
};

export default EditQuiz;
