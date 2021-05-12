import React, { useContext } from 'react';
import { useAppSelector, useAppDispatch } from '../../Hooks/Hooks';
import { setModal, clearMessage } from './modalSlice';
import { CallbackContext } from '../MainTemplate';
import closeIcon from '../../../../assets/images/close.png';
import Icon from '../Icon/Icon';

const Modal = ({ name, content }: { name: string; content: React.ReactNode }) => {
  //const currentOpenModal = useAppSelector((state) => state.modal.modalName);
  const ctx = useContext(CallbackContext);
  const setModalCallback = ctx.setModalCallback;
  const modalCallback = ctx.modalCallback;
  const dispatch = useAppDispatch();
  const modalState = useAppSelector((state) => state.modal);
  const isOpen = modalState.modalName === name;
  return (
    <div className='Modal' style={{ top: isOpen ? '0' : '-100vh' }}>
      <div className='modal-box'>
        <div className='closer-container'>
          <Icon
            src={closeIcon}
            textAlt={'X'}
            clickCallback={() => {
              dispatch(clearMessage());
              dispatch(setModal(null));
              setModalCallback(null);
            }}
          />
        </div>
        {content}
      </div>
    </div>
  );
};

export default Modal;
