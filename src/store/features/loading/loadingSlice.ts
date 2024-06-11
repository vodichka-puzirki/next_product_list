import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_LOADING } from '@/constans/store';
import { LoadingStateType } from '@/types/store';

const initialState: LoadingStateType = {
  loading: INITIAL_LOADING,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoadingAction: (state) => {
      state.loading = true;
    },
    endLoadingAction: (state) => {
      state.loading = INITIAL_LOADING;
    },
  },
});

export const { startLoadingAction, endLoadingAction } = loadingSlice.actions;
export default loadingSlice.reducer;
