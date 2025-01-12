import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '/src/styles/Searchline.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilters, setName } from '../store/slices/filtersSlice';
import getNavigateUrl from '../hooks/useNavigateUrl';

const SearchLine = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const filters = useSelector((state) => state.filters);
    const [searchQuery, setSearchQuery] = useState(filters.name);

    const handleSearchClick = () => {
        if (!location.pathname.startsWith('/search')) {
            dispatch(clearFilters())
            dispatch(setName(searchQuery));
            navigate(getNavigateUrl({ name: searchQuery }))
        }
        else {
            dispatch(setName(searchQuery));
        }
    };

    return (
        <div className="banner-search">
            <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="button" onClick={handleSearchClick}>
                Search
            </button>
        </div>
    );
}

export default SearchLine;
;