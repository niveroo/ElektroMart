import './App.css'
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeUser } from './store/slices/userSlice';
import OrderPage from './pages/OrderPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeUser());
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App