import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

let products1 = [
    {
        "id": 1,
        "name": "Laptop",
        "description": "Powerful laptop",
        "price": 999,
        "stock": 10,
        "imagePath": "./vite.svg",
        "categoryName": "Laptops"
    },
    {
        "id": 2,
        "name": "Smartphone",
        "description": "Latest model",
        "price": 799,
        "stock": 15,
        "imagePath": "./vite.svg",
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
    products: [],
    error: false,
};

export const fetchDBProducts = createAsyncThunk(
    'products/fetchBDProducts',
    async () => {
        const response = await fetch(
            `${API_KEY}/api/products`,
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
    async (filters) => {

        const filteredProducts = products1.filter((product) => {
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