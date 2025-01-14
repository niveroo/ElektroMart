import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './slices/filtersSlice.js'
import productsReducer from './slices/productsSlice.js';
import categoriesReducer from './slices/categoriesSlice.js';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    products: productsReducer,
    categories: categoriesReducer,
  },
});