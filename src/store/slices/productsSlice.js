import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

let products1 = [
    { id: 1, src: './vite.svg', name: 'Laptop', description: 'Powerful laptop', price: 999, category: 'Laptops' },
    { id: 2, src: './vite.svg', name: 'Smartphone', description: 'Latest model', price: 799, category: 'Smartphones' },
    { id: 3, src: './vite.svg', name: 'Headphones', description: 'Noise-cancelling headphones', price: 199, category: 'Accessories' },
    { id: 4, src: './vite.svg', name: 'Smartwatch', description: 'Stylish smartwatch', price: 299, category: 'Accessories' },
    { id: 5, src: './vite.svg', name: 'Monitor', description: '4K monitor', price: 499, category: 'Monitors' },
    { id: 6, src: './vite.svg', name: 'Tablet', description: '10-inch tablet', price: 599, category: 'Tablets' },
    { id: 7, src: './vite.svg', name: 'Gaming Laptop', description: 'High-performance gaming laptop', price: 1499, category: 'Laptops' },
    { id: 8, src: './vite.svg', name: 'Wireless Earbuds', description: 'True wireless earbuds', price: 149, category: 'Accessories' },
];

const initialState = {
    isLoading: false,
    products: [],
    error: false,
};

export const fetchDBProducts = createAsyncThunk(
    'products/fetchBDProducts',
    async () => {
        const response = await fetch(
            `${API_KEY}/api/`,
            {
                method: 'GET',
                headers: {
                    accept: 'text/plain',
                },
            }
        );

        return response.json();
    }
);

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        return products1;
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