import { useRef, useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartProducts, removeProduct } from '../store/slices/cartSlice'
import debounce from 'lodash/debounce'
import '../styles/Cart.css'

function Cart() {
    const ref = useRef()
    const dispatch = useDispatch()
    const { isLoading, error, ids, productsMap } = useSelector(state => state.cart)

    const [show, setShow] = useState(false)
    const toggle = () => setShow(prev => !prev)

    const debouncedFetch = useMemo(() => {
        return debounce(ids => {
            dispatch(fetchCartProducts(ids))
        }, 300)
    }, [])

    useEffect(() => {
        debouncedFetch(ids)
    }, [debouncedFetch, ids])

    const removeFromCart = id => {
        dispatch(removeProduct(id))
    }

    const content = useMemo(() => {
        if (isLoading) {
            return 'Loading'
        }

        if (error) {
            return 'Boowomp'
        }

        return ids.map(id => {
            const product = productsMap[id]
            const remove = () => removeFromCart(product.id)

            return product
                ? <CartItem key={id} product={product} onRemove={remove} />
                : 'Loading...'
        })
    }, [isLoading, error, ids, productsMap])

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
    )

    return (
        <div className="cart-anchor" onClick={toggle}>
            Cart{ids.length ? ` (${ids.length})` : null}
            {modal}
        </div>
    )
}

function CartItem({ product, onRemove }) {
    return (
        <div className="cart-item">
            <span>
                {product.name}
            </span>
            <span>
                {product.description}
            </span>
            <span>
                Price: {product.price}
            </span>
            <button onClick={onRemove}>
                Remove
            </button>
        </div>
    )
}

function preventPropagation(e) {
    e.stopPropagation()
}

export default Cart 