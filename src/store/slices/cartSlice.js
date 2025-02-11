import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../../services/API';
import { useDispatch } from 'react-redux';

const initialState = {
    isLoading: false,
    error: false,
    productsMap: [],
    refreshed: false
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
    async ({ productId, quantity }, { rejectWithValue }) => { // Разбиваем объект на два параметра
        try {
            const data = await API.addToCart(productId, quantity);
            return data;
        } catch (error) {
            console.error("Error adding product to cart:", error);
            return rejectWithValue('Failed to add product to cart');
        }
    }
);

export const deleteCart = createAsyncThunk(
    'cart/deleteCart',
    async ({ productId }, { rejectWithValue }) => {
        try {
            console.log("Dispatch called with Id:", productId);
            const response = await API.deleteFromCart(productId);
            return response;
        } catch (error) {
            console.error("Error deleting product from cart:", error);
            return rejectWithValue('Failed to delete product from cart');
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
                state.refreshed = true;
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
                state.refreshed = false;
                state.isLoading = false;
            })
            .addCase(AddToCart.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'Failed to add product to cart';
            })
            .addCase(deleteCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteCart.fulfilled, (state, action) => {
                state.refreshed = false;
                state.isLoading = false;
            })
            .addCase(deleteCart.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'Failed to delete product from cart';
            });
    },
});


export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;