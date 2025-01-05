import { useState } from "react";
import ProductList from "./ProductList";
import FilterBar from "./FilterBar";
import '/src/styles/ProductsSection.css';

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

const ProductsSection = () => {

    const [filteredProducts, setFilteredProducts] = useState(products1);

    const handleFilter = (filters) => {

        const { name, minPrice, maxPrice, category } = filters;

        const updatedProducts = products1.filter((product) => {
            const matchesName = name === '' || product.name.toLowerCase().includes(name.toLowerCase());
            const matchesMinPrice = minPrice === '' || product.price >= parseFloat(minPrice);
            const matchesMaxPrice = maxPrice === '' || product.price <= parseFloat(maxPrice);
            const matchesCategory = category === '' || product.category === category;

            return matchesName && matchesMinPrice && matchesMaxPrice && matchesCategory;
        });

        setFilteredProducts(updatedProducts);
    };

    return (
        <div className="products-section">
            <FilterBar onFilter={handleFilter} />
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default ProductsSection;