import React from 'react';
import '../styles/RecomendedProducts.css'
import ProductCard from './ProductCard';

const RecommendedProducts = ({ products }) => {
    return (
        <div className="recommended-products">
            <div className='text'>Recommended Products</div>
            <div className="product-list-wrapper">
                {products.length ? (
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
        </div>
    );
};

export default RecommendedProducts;