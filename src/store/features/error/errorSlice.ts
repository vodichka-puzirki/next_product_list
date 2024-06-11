import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ErrorStateType, ErrorType } from '@/types/store';
import { INITIAL_ERROR } from '@/constans/store';

const initialState: ErrorStateType = {
  error: INITIAL_ERROR,
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setErrorAction: (state, action: PayloadAction<ErrorType>) => {
      state.error = action.payload;
    },
    clearErrorAction: (state) => {
      state.error = INITIAL_ERROR;
    },
  },
});

export const { setErrorAction, clearErrorAction } = errorSlice.actions;
export default errorSlice.reducer;
