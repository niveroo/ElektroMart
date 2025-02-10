import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../../services/API';

const initialState = {
    isLoading: false,
    id: null,
    product: null,
    error: false,
};

export const fetchProductById = createAsyncThunk(
    'product/fetchProductById',
    async (id, { rejectWithValue }) => {
        try {
            const product = await API.getProductById(id);
            return product;
        } catch (error) {
            return rejectWithValue('Error fetching the product');
        }
    }
);

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setId(state, action) {
            state.id = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductById.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProductById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
        });
        builder.addCase(fetchProductById.rejected, (state, action) => {
            state.error = true;
        });

    },
});

export const { setId } = productSlice.actions;

export default productSlice.reducer;