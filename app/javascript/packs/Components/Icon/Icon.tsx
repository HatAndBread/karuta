import React from 'react';

const Icon = ({ clickCallback, src, textAlt }: { clickCallback?: () => any; src: string; textAlt: string }) => {
  const handleClick = () => clickCallback && clickCallback();
  return (
    <img
      className='Icon'
      src={src}
      alt={textAlt}
      onClick={handleClick}
      style={{ cursor: clickCallback ? 'pointer' : 'default' }}
    />
  );
};

export default Icon;
