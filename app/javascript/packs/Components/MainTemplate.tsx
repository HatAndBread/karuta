import React from 'react';
import Nav from './Nav/Nav';

const MainTemplate = ({ content }: { content: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      {content}
    </div>
  );
};

export default MainTemplate;
