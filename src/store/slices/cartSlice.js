import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../../services/API';

let products1 = [
    {
        "id": "1",
        "name": "Laptop",
        "description": "Powerful laptop",
        "price": 999,
        "stock": 10,
        "imagePath": 'https://i5.walmartimages.com/seo/LG-Gram-17Z95P-K-Laptop-17-IPS-WQXGA-Intel-Evo-Platform-Core-i7-1195G7-16GB-Memory-512GB-M-2-NVMe-SSD-Iris-Xe-Graphics-Wi-Fi-6-Windows-11-Home-Backli_f4678962-04d2-4fe7-831d-4d6c62390eaa.abc548c0af0f7fe5e47aa5f6d6776d15.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
        "categoryName": "Laptops"
    },
    {
        "id": "2",
        "name": "Smartphone",
        "description": "Latest model",
        "price": 799,
        "stock": 15,
        "imagePath": "https://images.unsplash.com/photo-1598965402089-897ce52e8355?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "categoryName": "Smartphones"
    },
    {
        "id": "3",
        "name": "Headphones",
        "description": "Noise-cancelling headphones",
        "price": 199,
        "stock": 20,
        "imagePath": "https://m.media-amazon.com/images/I/41tp0JPPlmL.jpg",
        "categoryName": "Accessories"
    },
    {
        "id": "4",
        "name": "Smartwatch",
        "description": "Stylish smartwatch",
        "price": 299,
        "stock": 8,
        "imagePath": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYG03ref_FV98_VW_34FR+watch-case-44-aluminum-midnight-nc-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=OUh6OFdFVEJxVkF6SUo5TWxpTE50MG5TeWJ6QW43NUFnQ2V4cmRFc1VnWWxvMTNVeXVWaTk0Ui9PSEVKVVU0dzN2QVRTWW5kR2Jad3ptYU8zZ21EUWZmQXlUU2xCQ2pTN3lrcDE0UU1hK0ZpRFN2VTEyRk9ZNEFubk9kM01kUmIySDNGVkFuTWJDdzY3LzhwNXhBeGdqanlpa2c4cm9CV25oRTZ3N0FCaUk1SHU3NmZyQzBTVVZ5ZWlSanV5V2tOdkZ1emhkYWNycmJka1dOU01FKzNBdFRUV0g5d1FoYmhBY0FhQ1ZnNFdFRFI2SjAxL1NHYWFLQ2hLdGdQSUw4bw",
        "categoryName": "Accessories"
    },
    {
        "id": "5",
        "name": "Monitor",
        "description": "4K monitor",
        "price": 499,
        "stock": 12,
        "imagePath": "https://misura.s11.cdn-upgates.com/_cache/3/c/3cb2fd73d55747db5675a293dc8fcba1-qm24dfi-foto01.jpg",
        "categoryName": "Monitors"
    },
    {
        "id": "6",
        "name": "Tablet",
        "description": "10-inch tablet",
        "price": 599,
        "stock": 25,
        "imagePath": "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/11/pr_2023_11_16_12_33_18_601_00.jpg",
        "categoryName": "Tablets"
    },
    {
        "id": "7",
        "name": "Gaming Laptop",
        "description": "High-performance gaming laptop",
        "price": 1499,
        "stock": 5,
        "imagePath": "https://cdn.mos.cms.futurecdn.net/j5ndx4Riebp6xaYzYpVUxP.jpg",
        "categoryName": "Laptops"
    },
    {
        "id": "8",
        "name": "Wireless Earbuds",
        "description": "True wireless earbuds",
        "price": 149,
        "stock": 30,
        "imagePath": "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/solo-buds/pdp/product-carousel/matte-black/black-01-solobuds.jpg",
        "categoryName": "Accessories"
    }
]

const initialState = {
    isLoading: false,
    error: false,
    ids: [],
    productsMap: {},
};

export const fetchDBCartProducts = createAsyncThunk(
    'cart/fetchBDProducts',
    async (ids) => {
        const promises = ids.map(id => API.getProductById(id))
        return Promise.all(promises)
    }
);

export const fetchCartProducts = createAsyncThunk(
    'cart/fetchProducts',
    async (ids) => {
        return products1.filter(product => ids.includes(product.id))
    }
);

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setProduct(state, { payload }) {
            state.ids = payload
        },
        addProduct(state, { payload }) {
            if (state.ids.every(id => id !== payload)) {
                state.ids.push(payload)
            }
        },
        removeProduct(state, { payload }) {
            state.ids = state.ids.filter(id => id !== payload)
        },
        clearProduct(state) {
            state.ids = []
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCartProducts.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCartProducts.fulfilled, (state, action) => {
            state.isLoading = false;

            const products = action.payload
            const newProductsMap = {}

            for (const product of products) {
                newProductsMap[product.id] = product
            }

            state.productsMap = newProductsMap
        });
        builder.addCase(fetchCartProducts.rejected, (state, action) => {
            state.error = true;
        });
    },
});


export const { setProduct, addProduct, removeProduct, clearProduct } = cartSlice.actions;

export default cartSlice.reducer;