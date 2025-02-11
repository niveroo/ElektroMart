import { useRef, useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash/debounce';
import '../styles/Cart.css';
import { deleteCart, getCart } from '../store/slices/cartSlice';

function Cart() {
    const ref = useRef();
    const dispatch = useDispatch();

    const { refreshed, isLoading, error, productsMap } = useSelector(state => state.cart);
    const { isLoggedIn } = useSelector(state => state.user);

    const [show, setShow] = useState(false);
    const toggle = () => setShow(prev => !prev);

    useEffect(() => {
        if (isLoggedIn) {
            if (refreshed === false) {
                dispatch(getCart());
            }
        }
    }, [isLoggedIn, dispatch, refreshed]);

    const handleDeleteClick = (productId) => {
        console.log("Clicked delete with id:", productId);
        dispatch(deleteCart({ productId }));
    };

    const content = useMemo(() => {
        if (!isLoggedIn) {
            return <div className="not-logged-in">You are not logged in. Please log in to view your cart.</div>;
        }

        if (isLoading) {
            return 'Loading...';
        }

        if (error) {
            return 'Failed to load cart items.';
        }

        if (Object.keys(productsMap).length === 0) {
            return 'Your cart is empty.';
        }

        return Object.values(productsMap).map(product => (
            <CartItem key={product.id} product={product} handleDeleteClick={handleDeleteClick} />
        ));
    }, [isLoading, error, isLoggedIn, productsMap]);

    const modal = show && (
        <dialog ref={ref} className="cart-container" onClick={preventPropagation}>
            <div className="cart" open>
                <div className="cart-header">
                    <h3>Cart</h3>
                    <button onClick={toggle}>Close</button>
                </div>
                <div className="cart-content">{content}</div>
            </div>
        </dialog>
    );

    return (
        <div className="cart-anchor" onClick={toggle}>
            Cart {Object.keys(productsMap).length ? ` (${Object.keys(productsMap).length})` : null}
            {modal}
        </div>
    );
}

function CartItem({ product, handleDeleteClick }) {
    return (
        <div className="cart-item">
            <span>{product.productName}</span>
            <span>Quantity: {product.quantity}</span>
            <span>Price: {product.price}</span>
            <span>Total: {product.totalPrice}</span>
            <button onClick={() => handleDeleteClick(product.productId)}>Delete</button>
        </div>
    );
}

function preventPropagation(e) {
    e.stopPropagation();
}

export default Cart;
