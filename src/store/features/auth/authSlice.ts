import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { INITIAL_USER_ID } from '@/constans/store';
import { AuthStateType, UserType } from '@/types/store';

const initialState: AuthStateType = {
  userInfo: INITIAL_USER_ID,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserInfoAction: (store, action: PayloadAction<UserType>) => {
      store.userInfo = action.payload;
    },
  },
});

export const { setUserInfoAction } = authSlice.actions;
export default authSlice.reducer;
