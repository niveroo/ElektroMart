import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '/src/styles/FilterBar.css';

const FilterBar = ({ onFilter }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [name, setName] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);

        setName(queryParams.get('name') || '');
        setMinPrice(queryParams.get('minPrice') || '');
        setMaxPrice(queryParams.get('maxPrice') || '');
        setCategory(queryParams.get('category') || '');
    }, [location.search]);

    const handleFilterClick = () => {
        const queryParams = new URLSearchParams(window.location.search);

        if (name) {
            queryParams.set('name', name);
        } else {
            queryParams.delete('name');
        }

        if (minPrice) {
            queryParams.set('minPrice', minPrice);
        } else {
            queryParams.delete('minPrice');
        }

        if (maxPrice) {
            queryParams.set('maxPrice', maxPrice);
        } else {
            queryParams.delete('maxPrice');
        }

        if (category) {
            queryParams.set('category', category);
        } else {
            queryParams.delete('category');
        }

        onFilter({ name, minPrice, maxPrice, category });

        navigate(`/search?${queryParams.toString()}`);
    };

    return (
        <div className="filter-bar">
            <input
                type="number"
                placeholder="Min price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
                type="number"
                placeholder="Max price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">All Categories</option>
                <option value="Laptops">Laptops</option>
                <option value="Smartphones">Smartphones</option>
                <option value="Accessories">Accessories</option>
                <option value="Monitors">Monitors</option>
                <option value="Tablets">Tablets</option>
            </select>
            <button onClick={handleFilterClick}>Apply Filters</button>
        </div>
    );
};

export default FilterBar;
