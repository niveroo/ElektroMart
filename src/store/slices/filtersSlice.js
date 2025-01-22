import { createSlice } from "@reduxjs/toolkit";
import { useLocation } from "react-router-dom";

const searchParams = new URLSearchParams(location.search);

const initialState = {
    name: searchParams.get("name") || '',
    minPrice: searchParams.get("minprice") || '',
    maxPrice: searchParams.get("maxprice") || '',
    category: searchParams.get("category") || '',
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setName(state, action) {
            state.name = action.payload;
        },
        setMinPrice(state, action) {
            state.minPrice = action.payload;
        },
        setMaxPrice(state, action) {
            state.maxPrice = action.payload;
        },
        setCategory(state, action) {
            state.category = action.payload;
        },
        clearFilters(state) {
            state.name = '';
            state.minPrice = '';
            state.maxPrice = '';
            state.category = '';
        },
    }
});

export const { setName, setMinPrice, setMaxPrice, setCategory, clearFilters } = filtersSlice.actions;

export default filtersSlice.reducer;