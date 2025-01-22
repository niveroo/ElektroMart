import ProductList from "./ProductList";
import FilterBar from "./FilterBar";
import '/src/styles/ProductsSection.css';
import { useDispatch, useSelector } from "react-redux";

const ProductsSection = () => {
    const productsSlice = useSelector((state) => state.products);

    return (
        <div className="products-section">
            <FilterBar />
            <ProductList products={productsSlice.products} />
        </div>
    );
};

export default ProductsSection;
