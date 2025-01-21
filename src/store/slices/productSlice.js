import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

let products1 = [
    {
        "id": 1,
        "name": "Laptop",
        "description": "Powerful laptop",
        "price": 999,
        "stock": 10,
        "imagePath": './vite.svg',
        "categoryName": "Laptops"
    },
    {
        "id": 2,
        "name": "Smartphone",
        "description": "Latest model",
        "price": 799,
        "stock": 15,
        "imagePath": "https://images.unsplash.com/photo-1598965402089-897ce52e8355?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "categoryName": "Smartphones"
    },
    {
        "id": 3,
        "name": "Headphones",
        "description": "Noise-cancelling headphones",
        "price": 199,
        "stock": 20,
        "imagePath": "./vite.svg",
        "categoryName": "Accessories"
    },
    {
        "id": 4,
        "name": "Smartwatch",
        "description": "Stylish smartwatch",
        "price": 299,
        "stock": 8,
        "imagePath": "./vite.svg",
        "categoryName": "Accessories"
    },
    {
        "id": 5,
        "name": "Monitor",
        "description": "4K monitor",
        "price": 499,
        "stock": 12,
        "imagePath": "./vite.svg",
        "categoryName": "Monitors"
    },
    {
        "id": 6,
        "name": "Tablet",
        "description": "10-inch tablet",
        "price": 599,
        "stock": 25,
        "imagePath": "./vite.svg",
        "categoryName": "Tablets"
    },
    {
        "id": 7,
        "name": "Gaming Laptop",
        "description": "High-performance gaming laptop",
        "price": 1499,
        "stock": 5,
        "imagePath": "./vite.svg",
        "categoryName": "Laptops"
    },
    {
        "id": 8,
        "name": "Wireless Earbuds",
        "description": "True wireless earbuds",
        "price": 149,
        "stock": 30,
        "imagePath": "./vite.svg",
        "categoryName": "Accessories"
    }
]

const initialState = {
    isLoading: false,
    id: null,
    product: null,
    error: false,
};

export const fetchDBProductById = createAsyncThunk(
    'product/fetchDBById',  // The action type prefix
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `${API_KEY}/api/products/${id}`,  // Fetch with product ID in URL
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',  // Accept JSON response
                    },
                }
            );

            if (!response.ok) {
                return rejectWithValue('Network response was not ok');
            }

            const product = await response.json();  // Convert response to JSON
            return product;  // Return the product data to be used in reducers
        } catch (error) {
            return rejectWithValue('Error fetching the product');  // Pass error message if failed
        }
    }
);

export const fetchProductById = createAsyncThunk(
    'product/fetchById',
    async (id, { rejectWithValue }) => {
        try {

            const product = products1.find(product => product.id == id);

            console.log("product:", product);
            if (!product) {
                return rejectWithValue('Product not found');
            }

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