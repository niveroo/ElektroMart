import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const categories1 = [
    { id: 1, src: 'https://images.unsplash.com/photo-1452457750107-cd084dce177d?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Laptops' },
    { id: 2, src: 'https://images.unsplash.com/photo-1598965402089-897ce52e8355?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Smartphones' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523395243481-163f8f6155ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Accessories' },
    { id: 4, src: 'https://plus.unsplash.com/premium_photo-1680721575441-18d5a0567269?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Monitors' },
    { id: 5, src: 'https://images.unsplash.com/photo-1621009063622-4467e453c3c1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Tablets' }
];



const initialState = {
    isLoading: false,
    categories: [],
    error: false,
};

export const fetchDBCategories = createAsyncThunk(
    'categories/fetchBDCategories',
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

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        return categories1;
    }
);


export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categories = action.payload;
        });
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.error = true;
        });
    },
});


export const { } = categoriesSlice.actions;

export default categoriesSlice.reducer;