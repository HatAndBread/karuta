import React, { useState, useContext } from 'react';
import { CallbackContext } from '../MainTemplate';
import { cloneDeep, fromPairs } from 'lodash';
import Icon from '../../Components/Icon/Icon';
import deleteIcon from '../../../../assets/images/delete.png';
import axios from 'axios';
import setToken from '../../../token';
import { useAppDispatch } from '../../Hooks/Hooks';
import { setModal } from '../Modal/modalSlice';
import { setWarnMessage, setErrorMessage } from '../Modal/modalSlice';

setToken();

const QuestionForm = ({
  quiz,
  index,
  setQuiz
}: {
  content?: string;
  answer?: string;
  quiz: Quiz;
  index: number;
  setQuiz: React.Dispatch<React.SetStateAction<Quiz>>;
}) => {
  const dispatch = useAppDispatch();
  const setModalCallback = useContext(CallbackContext).setModalCallback;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'answer' | 'content') => {
    const newQuestions = quiz.questions.map((question, ind) => {
      if (ind === index) question[type] = e.target.value;
      return question;
    });
    const quizCopy = cloneDeep(quiz);
    quizCopy.questions = newQuestions;
    setQuiz(quizCopy);
  };
  const deleteWord = () => {
    // TODO: warn first
    dispatch(setWarnMessage('Are you sure you want to delete this word?'));
    dispatch(setModal('WARN'));
    setModalCallback(() => () => {
      if (quiz.questions[index].id) {
        axios
          .delete(`/questions/${quiz.questions[index].id}`, {
            data: { id: quiz.questions[index].id }
          })
          .then((res) => {
            setQuiz(res.data);
          })
          .catch((err) => {
            dispatch(setErrorMessage(`There was a server error: ${err}. Please try again later.`));
            dispatch(setModal('ERROR'));
            console.log(err);
          });
      } else {
        const copy = cloneDeep(quiz);
        copy.questions.splice(index, 1);
        setQuiz(copy);
      }
    });
  };
  return (
    <div>
      <input type='text' value={quiz.questions[index].answer} onChange={(e) => handleChange(e, 'answer')} />
      <input type='text' value={quiz.questions[index].content} onChange={(e) => handleChange(e, 'content')} />
      <Icon src={deleteIcon} textAlt='␡' clickCallback={deleteWord} />
    </div>
  );
};

export default QuestionForm;
