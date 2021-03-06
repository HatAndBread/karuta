import React, { useState, useEffect, useContext } from 'react';
import Icon from '../Components/Icon/Icon';
import addIcon from '../../../assets/images/add.png';
import deleteIcon from '../../../assets/images/delete.png';
import axios from 'axios';
import QuestionForm from '../Components/Quizzes/QuestionForm';
import snakeize from '../../snakeize';
import { cloneDeep } from 'lodash';
import { useAppDispatch } from '../Hooks/Hooks';
import { CallbackContext } from '../Components/MainTemplate';
import { setModal, setWarnMessage, setErrorMessage } from '../Components/Modal/modalSlice';

const EditQuiz = ({
  quizData,
  currentUser,
  newQuiz
}: {
  quizData: Quiz;
  currentUser: CurrentUser | null;
  newQuiz: boolean;
}) => {
  const dispatch = useAppDispatch();
  const setModalCallback = useContext(CallbackContext).setModalCallback;
  console.log(useContext(CallbackContext), 'ASDFADFSSFD');
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
  const deleteQuiz = () => {
    dispatch(setWarnMessage('Are you sure you want to delete this quiz?'));
    dispatch(setModal('WARN'));
    setModalCallback(() => () => {
      axios
        .delete(`/users/${quiz.userId}/quizzes/${quiz.id}`)
        .then((res) => {
          if (res.data.path) {
            window.location.href = res.data.path;
          }
        })
        .catch((err) => {
          dispatch(
            setErrorMessage('There was a server error deleting this quiz: ' + err + '\n Please try again later.')
          );
          dispatch(setModal('ERROR'));
          console.log(err);
        });
    });
  };
  useEffect(() => {
    console.log(quiz, '????');
  }, [quiz]);
  return (
    <div className='EditQuiz'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={quiz.name ? quiz.name : ''}
          onChange={(e) => {
            const quizCopy = cloneDeep(quiz);
            quizCopy.name = e.target.value;
            setQuiz(quizCopy);
          }}
        />
        {!newQuiz && <Icon src={deleteIcon} textAlt='+' clickCallback={deleteQuiz} />}
        <div className='question-list'>
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
        </div>
        <button type='submit'>Save</button>
        <Icon src={addIcon} textAlt='+' clickCallback={addNew} />
      </form>
    </div>
  );
};

export default EditQuiz;
