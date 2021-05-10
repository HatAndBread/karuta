import React, { useState } from 'react';
import { Quiz, Question } from '../../Quizzes/Index';
import _ from 'lodash';

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
    const quizCopy = _.cloneDeep(quiz);
    quizCopy.questions = newQuestions;
    setQuiz(quizCopy);
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
    </div>
  );
};

export default QuestionForm;
