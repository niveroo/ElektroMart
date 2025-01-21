import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../store/slices/productSlice";

const ProductInfo = () => {
    const { product, isLoading, error, id } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(fetchProductById(id));
        }
    }, [dispatch, id]);

    const handleAddToCart = () => {
        //dispatch(addItem(product));
        console.log("added to cart", product);
    };

    if (isLoading) {
        return (
            <div>Product is loading...</div>
        )
    }
    if (error) {
        return (
            <div>An error occured while loading product.</div>
        )
    }

    return product && (
        <div className="product-info-container">
            <div className="product-image">
                <img src={product.imagePath} alt={product.name} />
            </div>
            <div className="product-details">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
            </div>
            <div className="product-purchase">
                <p className="product-price">${product.price}</p>
                <p className="product-stock">In stock: {product.stock} pcs</p>
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;