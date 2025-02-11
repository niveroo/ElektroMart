import React, { useState } from 'react';
import API from '../services/API';
import '../styles/OrderForm.css'

const OrderForm = () => {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [loading, setLoading] = useState(false); // Состояние загрузки
    const [error, setError] = useState(null); // Состояние для обработки ошибок

    const handleSubmit = async (e) => {
        e.preventDefault();
        const shippingAddress = `${country}, ${city}, ${street} ${houseNumber}`;

        try {
            setLoading(true); // Включаем состояние загрузки
            setError(null); // Сбрасываем ошибки перед отправкой

            // Вызов API для создания заказа с адресом
            await API.createOrder(shippingAddress);

            alert('Order successfully created!');
        } catch (err) {
            setError('Failed to create order. Please try again.');
        } finally {
            setLoading(false); // Отключаем состояние загрузки
        }
    };

    return (
        <form className='order-form' onSubmit={handleSubmit}>
            <div>
                <label>Country:</label>
                <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>City:</label>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Street:</label>
                <input
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>House Number:</label>
                <input
                    type="text"
                    value={houseNumber}
                    onChange={(e) => setHouseNumber(e.target.value)}
                    required
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Вывод ошибки */}
            <button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Order'}
            </button>
        </form>
    );
};

export default OrderForm;
