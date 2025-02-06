import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../../services/API';

const initialState = {
    isLoading: false,
    error: false,
    productsMap: [],
};

export const getCart = createAsyncThunk(
    'cart/getCart',
    async () => {
        try {
            const response = await API.getCart();
            return response.$values;
        } catch (error) {
            throw new Error('Failed to fetch cart data');
        }
    }
);

export const AddToCart = createAsyncThunk(
    'cart/AddToCart',
    async ({ productId, quantity }, { rejectWithValue }) => {
        try {
            const response = await API.addToCart(productId, quantity);

            const data = await response.json();
            console.log(data)
            return data;
        } catch (error) {
            return rejectWithValue('Failed to add product to cart');
        }
    }
);

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.productsMap = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCart.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(getCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.productsMap = action.payload;
            })
            .addCase(getCart.rejected, (state) => {
                state.isLoading = false;
                state.error = true;
            })
            .addCase(AddToCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(AddToCart.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(AddToCart.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'Failed to add product to cart';
            });
    },
});


export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;