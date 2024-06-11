import { configureStore } from '@reduxjs/toolkit';

import { auth, error, loading } from './features';

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth,
      loading,
      error,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
