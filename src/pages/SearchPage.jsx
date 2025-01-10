import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import ProductsSection from '../components/ProductsSection';
import './SearchPage.css'
import { fetchProducts } from '../store/slices/productsSlice';
import { useEffect } from 'react';
import { setCategory, setMaxPrice, setMinPrice, setName } from '../store/slices/filtersSlice';
import { Navigate, useNavigate } from 'react-router-dom';
import { useNavigateUrl } from '../hooks/useNavigateUrl';

const SearchPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const navigate = useNavigate();

  const genNavigateUrl = useNavigateUrl();

  useEffect(() => {
    dispatch(fetchProducts(filters));
    //navigate(genNavigateUrl(filters))
  }, [filters]);

  return (
    <div className='home'>
      <Banner />
      <ProductsSection />
    </div>
  );
};

export default SearchPage;