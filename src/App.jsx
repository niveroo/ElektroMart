import './App.css'
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useSaveCartIdsToStorage from './hooks/useSaveCartIdsToStorage'

function App() {
  useSaveCartIdsToStorage()

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App