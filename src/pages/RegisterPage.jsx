import Banner from "../components/Banner";
import Register from "../components/Register";
import './RegisterPage.css'

const RegisterPage = () => {
    return (
        <div className="login-page">
            <Banner />
            <Register />
        </div>
    );
}

export default RegisterPage;