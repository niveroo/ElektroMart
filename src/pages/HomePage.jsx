import Banner from '../components/Banner';
import ProductsSection from '../components/ProductsSection';
import './HomePage.css'
// import io from 'socket.io-client';

const HomePage = () => {
  return (
    <div className='home'>
      <Banner />
      <ProductsSection />
    </div>
  );
};

export default HomePage;