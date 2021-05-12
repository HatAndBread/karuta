import React from 'react';
import { useAppSelector } from '../../Hooks/Hooks';
import Modal from './Modal';
import WarnModal from './WarnModal';
import ErrorModal from './ErrorModal';

const ModalRouter = () => {
  const modalState = useAppSelector((state) => state.modal);
  const currentOpenModal = modalState.modalName;
  console.log(currentOpenModal);
  return (
    <div className='ModalRouter'>
      <Modal name='ERROR' content={<ErrorModal textContent={'There was an Error!'} />} />
      <Modal name='MESSAGE' content={<div>HELLO</div>} />
      <Modal name='WARN' content={<WarnModal textContent={modalState.warnMessage} />} />
    </div>
  );
};

export default ModalRouter;
