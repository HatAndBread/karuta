import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  currentGame: 'KARUTA' | 'MEMORY' | null;
}

const initialState: GameState = {
  currentGame: null
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCurrentGame: (state, action: PayloadAction<'KARUTA' | 'MEMORY' | null>) => {
      state.currentGame = action.payload;
    }
  }
});

export const { setCurrentGame } = gameSlice.actions;
export default gameSlice.reducer;
