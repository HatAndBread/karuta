import React from 'react';
import Icon from '../Icon/Icon';
import errorIcon from '../../../../assets/images/error.png';
import { useAppDispatch } from '../../Hooks/Hooks';
import { setModal } from './modalSlice';

const ErrorModal = ({ textContent }: { textContent: string }) => {
  const dispatch = useAppDispatch();
  return (
    <div className='modal-content'>
      <Icon src={errorIcon} textAlt='⚠' />
      {textContent}
      <button onClick={() => dispatch(setModal(null))}>OK</button>
    </div>
  );
};

export default ErrorModal;
