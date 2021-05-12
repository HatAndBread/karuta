import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  modalName: 'WARN' | 'ERROR' | 'MESSAGE' | null;
}

const initialState: ModalState = {
  modalName: null
};
export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<'WARN' | 'ERROR' | 'MESSAGE' | null>) => {
      state.modalName = action.payload;
      return state;
    }
  }
});

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;
