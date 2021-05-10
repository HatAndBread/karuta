import React, { useState } from 'react';
import { cloneDeep, iteratee } from 'lodash';
import Icon from '../../Components/Icon/Icon';
import deleteIcon from '../../../../assets/images/delete.png';
import axios from 'axios';
import setToken from '../../../token';

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
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'answer' | 'content'
  ) => {
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
    if (quiz.questions[index].id) {
      axios
        .delete(`/questions/${quiz.questions[index].id}`, {
          data: { id: quiz.questions[index].id }
        })
        .then((res) => {
          setQuiz(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const copy = cloneDeep(quiz);
      copy.questions.splice(index, 1);
      setQuiz(copy);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={quiz.questions[index].answer}
        onChange={(e) => handleChange(e, 'answer')}
      />
      <input
        type="text"
        value={quiz.questions[index].content}
        onChange={(e) => handleChange(e, 'content')}
      />
      <Icon src={deleteIcon} textAlt="␡" clickCallback={deleteWord} />
    </div>
  );
};

export default QuestionForm;
