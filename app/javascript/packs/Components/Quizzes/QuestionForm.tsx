import React, { useState } from 'react';

const QuestionForm = ({
  content,
  answer
}: {
  content?: string;
  answer?: string;
}) => {
  const [answerText, setAnswerText] = useState(answer);
  const [contentText, setContentText] = useState(content);
  return (
    <div>
      <input
        type="text"
        value={answerText ? answerText : ''}
        onChange={(e) => setAnswerText(e.target.value)}
      />
      <input
        type="text"
        value={contentText ? contentText : ''}
        onChange={(e) => setContentText(e.target.value)}
      />
    </div>
  );
};

export default QuestionForm;
