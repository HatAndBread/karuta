import React from 'react';
import { useAppSelector } from '../../Hooks/Hooks';
import Modal from './Modal';

const ModalRouter = () => {
  const currentOpenModal = useAppSelector((state) => state.modal.modalName);
  console.log(currentOpenModal);
  const getCurrentModal = () => {
    switch (currentOpenModal) {
      case 'ERROR':
        return <Modal />;
      case 'MESSAGE':
        return <Modal />;
      case 'WARN':
        return <Modal />;
      default:
        return <Modal />;
    }
  };
  return <div className='ModalRouter'>{getCurrentModal()}</div>;
};

export default ModalRouter;
