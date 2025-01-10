import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { setCategory, setMaxPrice, setMinPrice, setName } from './store/slices/filtersSlice';
import { use } from 'react';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const name = searchParams.get("name") || '';
    const minPrice = searchParams.get("minprice") || '';
    const maxPrice = searchParams.get("maxprice") || '';
    const category = searchParams.get("category") || '';

    if (name) dispatch(setName(name));
    if (minPrice) dispatch(setMinPrice(minPrice));
    if (maxPrice) dispatch(setMaxPrice(maxPrice));
    if (category) dispatch(setCategory(category));

    console.log("initial filter", searchParams.toString(), location);
  }, [dispatch]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App