import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  modalName: 'KARUTA' | 'MEMORY' | null;
}

const initialState: ModalState = {
  modalName: null
};
export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<'KARUTA' | 'MEMORY' | null>) => {
      state.modalName = action.payload;
      return state;
    }
  }
});

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;
