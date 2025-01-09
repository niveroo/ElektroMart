import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '/src/styles/Searchline.css';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../store/slices/filtersSlice';

const SearchLine = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);
    const [searchQuery, setSearchQuery] = useState(filters.name);

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchClick = () => {
        if (searchQuery.trim()) {
            dispatch(setName(searchQuery));
        }
    };

    return (
        <div className="banner-search">
            <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={handleInputChange}
            />
            <button type="button" onClick={handleSearchClick}>
                Search
            </button>
        </div>
    );
}

export default SearchLine;
