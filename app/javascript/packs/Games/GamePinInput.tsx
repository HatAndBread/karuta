import { keyBy } from 'lodash';
import React, { useEffect, useState } from 'react';

const GamePinInput = () => {
  const [pin, setPin] = useState('');
  useEffect(() => {
    const listenForKey = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9' && pin.length < 5) {
        setPin(pin + e.key);
      } else if (e.code === 'Backspace') {
        setPin(pin.slice(0, pin.length - 1));
      }
    };
    document.addEventListener('keydown', listenForKey);
    return () => document.removeEventListener('keydown', listenForKey);
  }, [pin]);
  const setPinIfValid = (num: string) => pin.length < 5 && setPin(num);
  const submit = () => {
    console.log('submitting pin!');
  };
  return (
    <div className='GamePinInput'>
      {pin}
      <div className='pin-button-container'>
        <div className='pin-button top-left' onClick={() => setPinIfValid(pin + '1')}>
          1
        </div>
        <div className='pin-button' onClick={() => setPinIfValid(pin + '2')}>
          2
        </div>
        <div className='pin-button top-right' onClick={() => setPinIfValid(pin + '3')}>
          3
        </div>
        <div className='pin-button' onClick={() => setPinIfValid(pin + '4')}>
          4
        </div>
        <div className='pin-button' onClick={() => setPinIfValid(pin + '5')}>
          5
        </div>
        <div className='pin-button' onClick={() => setPinIfValid(pin + '6')}>
          6
        </div>
        <div className='pin-button' onClick={() => setPinIfValid(pin + '7')}>
          7
        </div>
        <div className='pin-button' onClick={() => setPinIfValid(pin + '8')}>
          8
        </div>
        <div className='pin-button' onClick={() => setPinIfValid(pin + '9')}>
          9
        </div>
        <div className='pin-button bottom-left' onClick={() => setPin(pin.slice(0, pin.length - 1))}>
          ⬅
        </div>
        <div className='pin-button' onClick={() => setPinIfValid(pin + '0')}>
          0
        </div>
        <div className='pin-button bottom-right' onClick={submit}>
          🆗
        </div>
      </div>
    </div>
  );
};

export default GamePinInput;
