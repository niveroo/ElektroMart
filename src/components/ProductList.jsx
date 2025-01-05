import ProductCard from './ProductCard';
import '/src/styles/ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductList;
