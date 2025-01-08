import { useNavigate } from 'react-router-dom';
import logo from '/src/assets/laptop.svg'
import '/src/styles/Logo.css'

const Logo = () => {
    const now = new Date();
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');  // Переход на главную страницу
    };

    return (
        <div className="logo" onClick={handleLogoClick}>
            <img src={logo} height="50em" alt="ElektroMart" />
            <h2>ElektroMart</h2>
        </div>
    );
};

export default Logo;