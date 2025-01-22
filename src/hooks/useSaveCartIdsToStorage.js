import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProduct } from '../store/slices/cartSlice'

export default function useSaveCartIdsToStorage() {
    const dispatch = useDispatch()
    const { ids } = useSelector(state => state.cart)

    useEffect(() => {
        const serialized = localStorage.getItem(CART_ITEM_IDS_KEY)
        const savedIds = serialized && JSON.parse(serialized)

        dispatch(setProduct(Array.isArray(savedIds) ? savedIds : []))
    }, [dispatch])

    useEffect(() => {
        if (ids.length !== 0) {
            const serialized = JSON.stringify(ids)
            localStorage.setItem(CART_ITEM_IDS_KEY, serialized)
        }
    }, [ids])
}

const CART_ITEM_IDS_KEY = "cart-item-ids"
