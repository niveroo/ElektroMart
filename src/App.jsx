import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { setCategory, setMaxPrice, setMinPrice, setName } from './store/slices/filtersSlice';
import { use } from 'react';


function App() {
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