import logo from '/src/assets/laptop.svg'
import '/src/styles/Logo.css'
const Logo = () => {
    const now = new Date();
    return (
        <div className="logo">
            <img src={logo} height="50em" alt="ElektroMart" />
            <h2>ElektroMart</h2>
        </div>
    );
};

export default Logo;