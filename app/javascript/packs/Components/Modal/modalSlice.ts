import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  modalName: 'WARN' | 'ERROR' | 'MESSAGE' | null;
  errorMessage: string;
  warnMessage: string;
}

const initialState: ModalState = {
  modalName: null,
  errorMessage: '',
  warnMessage: ''
};
export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<'WARN' | 'ERROR' | 'MESSAGE' | null>) => {
      state.modalName = action.payload;
      return state;
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
      return state;
    },
    setWarnMessage: (state, action: PayloadAction<string>) => {
      state.warnMessage = action.payload;
      return state;
    },
    clearMessage: (state) => {
      state.warnMessage = '';
      state.errorMessage = '';
      return state;
    }
  }
});

export const { setModal, setErrorMessage, setWarnMessage, clearMessage } = modalSlice.actions;

export default modalSlice.reducer;
