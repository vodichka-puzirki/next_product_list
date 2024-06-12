import { useEffect } from 'react';

import { endLoadingAction, setErrorAction, setProductsAction, startLoadingAction } from '@/store';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

export const useGetProducts = () => {
  const products = useAppSelector((state) => state.productsState.products);
  const dispatch = useAppDispatch();

  const getProducts = async () => {
    dispatch(startLoadingAction());

    try {
      const res = await fetch('/api/');

      const data = await res.json();

      if (data.error) {
        dispatch(setErrorAction(data.error));
      } else {
        dispatch(setProductsAction(data));
      }

      return data;
    } catch {
      const err = { code: 400, message: 'Unknown error getting products' };

      dispatch(setErrorAction(err));
      return { error: err };
    } finally {
      dispatch(endLoadingAction());
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return products;
};
