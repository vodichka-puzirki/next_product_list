import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { INITIAL_PRODUCTS } from '@/constans/store';
import { ProductType, ProductsStateType } from '@/types/store';

const initialState: ProductsStateType = {
  products: INITIAL_PRODUCTS,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsAction: (store, action: PayloadAction<ProductType[]>) => {
      store.products = action.payload;
    },
  },
});

export const { setProductsAction } = productSlice.actions;
export default productSlice.reducer;
