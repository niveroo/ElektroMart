import { useEffect } from 'react';
import Banner from '../components/Banner';
import { fetchCategories } from '../store/slices/categoriesSlice';
import './HomePage.css'
import { useDispatch, useSelector } from 'react-redux';
import CategoriesSection from '../components/CategoriesSection';
import RecommendedProducts from '../components/RecomendedProducts';
import { fetchProducts, fetchRecommendedProducts } from '../store/slices/productsSlice';


const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchProducts({
            name: '',
            minPrice: '',
            maxPrice: '',
            category: ''
        }));
    }, []);
    const products = useSelector((state) => state.products);

    return (
        <div className='home-page'>
            <Banner />
            <CategoriesSection />
            <RecommendedProducts products={products.products} />
        </div>
    );
};

export default HomePage;