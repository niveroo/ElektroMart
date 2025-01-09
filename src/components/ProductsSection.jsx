import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductList from "./ProductList";
import FilterBar from "./FilterBar";
import '/src/styles/ProductsSection.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/productsSlice";

const ProductsSection = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);
    const products = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const filteredProducts = products.products.filter((product) => {
        const matchesName = filters.name === '' || product.name.toLowerCase().includes(filters.name.toLowerCase());
        const matchesMinPrice = filters.minPrice === '' || product.price >= parseFloat(filters.minPrice);
        const matchesMaxPrice = filters.maxPrice === '' || product.price <= parseFloat(filters.maxPrice);
        const matchesCategory = filters.category === '' || product.category === filters.category;

        return matchesName && matchesMinPrice && matchesMaxPrice && matchesCategory;
    });

    // const handleFilter = () => {

    //     setFilteredProducts(updatedProducts);

    //     const queryParams = new URLSearchParams(location.search);

    //     if (name) queryParams.set('name', name);
    //     else queryParams.delete('name');

    //     if (minPrice) queryParams.set('minPrice', minPrice);
    //     else queryParams.delete('minPrice');

    //     if (maxPrice) queryParams.set('maxPrice', maxPrice);
    //     else queryParams.delete('maxPrice');

    //     if (category) queryParams.set('category', category);
    //     else queryParams.delete('category');

    //     navigate(`?${queryParams.toString()}`, { replace: true });
    // };

    return (
        <div className="products-section">
            <FilterBar />
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default ProductsSection;
