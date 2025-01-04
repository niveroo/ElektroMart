import ProductList from "./ProductList";
import './ProductsSection.css'

let products1 = [
    { id: 1, src: './vite.svg', name: 'Laptop', description: 'Powerful laptop', price: 999 },
    { id: 2, src: './vite.svg', name: 'Smartphone', description: 'Latest model', price: 799 },
    { id: 3, src: './vite.svg', name: 'Smartphone', description: 'Latest model', price: 799 },
    { id: 4, src: './vite.svg', name: 'Smartphone', description: 'Latest model', price: 799 },
    { id: 5, src: './vite.svg', name: 'Smartphone', description: 'Latest model', price: 799 },
    { id: 6, src: './vite.svg', name: 'Smartphone', description: 'Latest model', price: 799 },
    { id: 7, src: './vite.svg', name: 'Smartphone', description: 'Latest model', price: 799 },
];

const ProductsSection = () => {
    return (
        <div className="products-section">
            <ProductList products={products1} />
            {/* <ProductList products={products1} /> */}
        </div>
    );
};

export default ProductsSection;