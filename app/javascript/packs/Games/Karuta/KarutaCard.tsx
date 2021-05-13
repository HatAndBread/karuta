import React from 'react';
const KarutaCard = ({ content, answer }: { content: string; answer: string }) => {
  return (
    <div className='KarutaCard'>
      <div className='karuta-card-answer'>{answer}</div>
    </div>
  );
};

export default KarutaCard;
