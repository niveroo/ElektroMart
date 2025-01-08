import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '/src/styles/Searchline.css';

const SearchLine = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Считываем параметр name из URL, если он есть
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const queryFromUrl = params.get('name') || '';
        setSearchQuery(queryFromUrl); // Устанавливаем значение из URL в input
    }, [location.search]); // Выполняем при изменении URL

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchClick = () => {
        const queryParams = new URLSearchParams(window.location.search);
        if (searchQuery.trim()) {
            queryParams.set('name', searchQuery); // Добавляем фильтр по имени
        } else {
            queryParams.delete('name'); // Удаляем параметр, если строка поиска пустая
        }
        navigate(`/search?${queryParams.toString()}`); // Обновляем URL
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
