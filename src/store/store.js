import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './slices/filtersSlice.js'
import productsReducer from './slices/productsSlice.js';
import productReducer from './slices/productSlice.js';
import categoriesReducer from './slices/categoriesSlice.js';
import cartReducer from './slices/cartSlice.js';
import userReducer from './slices/userSlice.js';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    products: productsReducer,
    categories: categoriesReducer,
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
  },
});