import Banner from "../components/Banner";
import Login from "../components/Login";
import './LoginPage.css'

const LoginPage = () => {
    return (
        <div className="login-page">
            <Banner />
            <Login />
        </div>
    );
}

export default LoginPage;