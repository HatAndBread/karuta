import React from 'react';
import { useAppSelector } from '../../Hooks/Hooks';
import Modal from './Modal';

const ModalRouter = () => {
  const currentOpenModal = useAppSelector((state) => state.modal.modalName);
  console.log(currentOpenModal);
  // const getCurrentModal = () => {
  //   switch (currentOpenModal) {
  //     case 'ERROR':
  //       return <Modal top={'-100vh'} />;
  //     case 'MESSAGE':
  //       return <Modal top={'-100vh'} />;
  //     case 'WARN':
  //       return <Modal top={'-100vh'} />;
  //       return <Modal top={'-100vh'} />;
  //   }
  // };
  return (
    <div className='ModalRouter'>
      <Modal name='ERROR' />
      <Modal name='MESSAGE' />
      <Modal name='WARN' />
    </div>
  );
};

export default ModalRouter;
