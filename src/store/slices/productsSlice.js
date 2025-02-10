import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../../services/API';

const initialState = {
    isLoading: false,
    products: [],
    error: false,
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (filters) => {
        const response = await API.getProducts();

        const products = response.$values; // Берем $values, если это корректная структура данных

        const filteredProducts = products.filter((product) => {
            const matchesName = filters.name === '' || product.name.toLowerCase().includes(filters.name.toLowerCase());
            const matchesMinPrice = filters.minPrice === '' || product.price >= parseFloat(filters.minPrice);
            const matchesMaxPrice = filters.maxPrice === '' || product.price <= parseFloat(filters.maxPrice);
            const matchesCategory = filters.category === '' || product.categoryName.toLowerCase() === filters.category.toLowerCase();

            return matchesName && matchesMinPrice && matchesMaxPrice && matchesCategory;
        });

        return filteredProducts;
    }
);

export const fetchRecommendedProducts = createAsyncThunk(
    'products/fetchRecommendedProducts',
    async ({ limit }) => {
        const recommendedProducts = products1.slice(0, limit);
        return recommendedProducts;
    }
);

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.error = true;
        });
    },
});


export const { } = productsSlice.actions;

export default productsSlice.reducer;