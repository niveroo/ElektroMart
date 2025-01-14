import { useEffect } from 'react';
import Banner from '../components/Banner';
import { fetchCategories } from '../store/slices/categoriesSlice';
import './HomePage.css'
import { useDispatch } from 'react-redux';
import CategoriesSection from '../components/CategoriesSection';

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    return (
        <div className='home'>
            <Banner />
            <CategoriesSection />
        </div>
    );
};

export default HomePage;