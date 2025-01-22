import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import ProductInfo from '../components/ProductInfo';
import './ProductPage.css';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setId } from '../store/slices/productSlice';

const ProductPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    console.log(useParams());
    useEffect(() => {
        dispatch(setId(id));
    }, [dispatch, id]);

    return (
        <div className="product-page">
            <Banner />
            <ProductInfo />
        </div>
    );
};

export default ProductPage;