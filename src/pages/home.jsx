import Banner from '../components/Banner';
import ProductsSection from '../components/ProductsSection';

import './home.css'
// import io from 'socket.io-client';

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <ProductsSection />
      {/* <ProductList products={products1} /> */}
    </div>
  );
};

export default Home;