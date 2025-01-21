import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import ProductsSection from '../components/ProductsSection';
import './SearchPage.css'
import { fetchProducts } from '../store/slices/productsSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getNavigateUrl from '../hooks/useNavigateUrl';

const SearchPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts(filters));
    navigate(getNavigateUrl(filters))
  }, [filters]);


  return (
    <div className='search-page'>
      <Banner />
      <ProductsSection />
    </div>
  );
};

export default SearchPage;