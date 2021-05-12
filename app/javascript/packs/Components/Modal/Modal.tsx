import React from 'react';
import { useAppSelector, useAppDispatch } from '../../Hooks/Hooks';
import { setModal } from './modalSlice';
import closeIcon from '../../../../assets/images/close.png';
import Icon from '../Icon/Icon';

const Modal = ({ name }: { name: string }) => {
  //const currentOpenModal = useAppSelector((state) => state.modal.modalName);
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.modalName) === name;
  return (
    <div className='Modal' style={{ top: isOpen ? '0' : '-100vh' }}>
      <div className='modal-box'>
        <div className='closer-container'>
          <Icon src={closeIcon} textAlt={'X'} clickCallback={() => dispatch(setModal(null))} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
