import React, { useContext } from 'react';
import Icon from '../Icon/Icon';
import warnIcon from '../../../../assets/images/warning.png';
import { useAppDispatch } from '../../Hooks/Hooks';
import { setModal, clearMessage } from './modalSlice';
import { CallbackContext } from '../MainTemplate';

const WarnModal = ({ textContent }: { textContent: string }) => {
  const ctx = useContext(CallbackContext);
  const setModalCallback = ctx.setModalCallback;
  const modalCallback = ctx.modalCallback;
  const dispatch = useAppDispatch();
  return (
    <div className='modal-content'>
      <Icon src={warnIcon} textAlt='⚠' />
      {textContent}
      <div className='warn-button-container'>
        <button
          onClick={() => {
            modalCallback();
            dispatch(setModal(null));
          }}>
          OK
        </button>
        <button
          onClick={() => {
            dispatch(setModal(null));
            dispatch(clearMessage());
            setModalCallback(() => {});
          }}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default WarnModal;
