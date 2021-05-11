import { PayloadAction } from '@reduxjs/toolkit';
import { createStore, combineReducers } from 'redux';

const currentGame = (state: string | null = null, action: PayloadAction<string>) => {
  switch (action.type) {
    case 'KARUTA':
      return 'KARUTA';
    default: {
      return state;
    }
  }
};
const isTeacher = (state: boolean = false, action: PayloadAction<string>) => {
  switch (action.type) {
    case 'TEACHER':
      return true;
    default:
      return false;
  }
};

export default createStore(
  combineReducers({ currentGame, isTeacher }),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
