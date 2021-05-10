import React, { useState } from 'react';
import { Quiz, Question } from '../../Quizzes/Index';
import { cloneDeep } from 'lodash';
import Icon from '../../Components/Icon/Icon';
import deleteIcon from '../../../../assets/images/delete.png';

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
    console.log('deleting a word!');
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
