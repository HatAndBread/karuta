import React, { useEffect } from 'react';
const GamePinInput = () => {
  return (
    <div className='GamePinInput'>
      <div className='pin-button top-left'>1</div>
      <div className='pin-button'>2</div>
      <div className='pin-button top-right'>3</div>
      <div className='pin-button'>4</div>
      <div className='pin-button'>5</div>
      <div className='pin-button'>6</div>
      <div className='pin-button'>7</div>
      <div className='pin-button'>8</div>
      <div className='pin-button'>9</div>
      <div className='pin-button bottom-left'>⬅</div>
      <div className='pin-button'>0</div>
      <div className='pin-button bottom-right'>🆗</div>
    </div>
  );
};

export default GamePinInput;
