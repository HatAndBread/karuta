import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './Components/Modal/modalSlice';
import gameReducer from './Games/gameSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    game: gameReducer
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
