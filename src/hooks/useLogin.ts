import { endLoadingAction, setErrorAction, setUserInfoAction, startLoadingAction } from '@/store';
import { useAppDispatch } from './useAppDispatch';

export const useLogin = () => {
  const dispatch = useAppDispatch();

  const login = async (credential: { email: string; password: string }) => {
    dispatch(startLoadingAction());

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(credential),
      });

      const data = await res.json();

      if (data.error) {
        dispatch(setErrorAction(data.error));
      } else {
        dispatch(setUserInfoAction(data));
      }

      return data;
    } catch {
      const err = { code: 400, message: 'Unknown login error' };

      dispatch(setErrorAction(err));
      return { error: err };
    } finally {
      dispatch(endLoadingAction());
    }
  };

  return { login };
};
