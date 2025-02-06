import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/userSlice";  // экшен для логаута
import { useNavigate } from "react-router-dom";
import { clearCart } from "../store/slices/cartSlice";
import "../styles/AuthButton.css"


const AuthButton = () => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);  // проверка состояния аутентификации
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        dispatch(logout());  // вызываем экшен логаута
        dispatch(clearCart());
    };

    const handleLoginClick = () => {
        navigate(`/login`);  // редирект на страницу логина
    };

    const handleRegisterClick = () => {
        navigate(`/register`);  // редирект на страницу регистрации
    };

    return (
        <div>
            {isLoggedIn ? (
                <button onClick={handleLogoutClick}>Logout</button>
            ) : (
                <div className="auth-button">
                    <button onClick={handleLoginClick}>Login</button>
                    <button onClick={handleRegisterClick}>Register</button>
                </div>
            )}
        </div>
    );
}
export default AuthButton;
