import Banner from '../components/Banner';
import ProductsSection from '../components/ProductsSection';
import './SearchPage.css'
// import io from 'socket.io-client';

const SearchPage = () => {
  return (
    <div className='home'>
      <Banner />
      <ProductsSection />
    </div>
  );
};

export default SearchPage;