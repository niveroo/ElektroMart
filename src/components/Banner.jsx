import './Banner.css'
import Logo from './Logo';
import { useState } from 'react'

const Banner = () => {
    const [time, setTime] = useState(new Date());
    setInterval(() => setTime(new Date()), 1000)

    return (
        <div className="banner">
            <Logo />
            <span>Time: {time.toLocaleTimeString()}</span>
        </div>
    );
};

export default Banner;

// now.toLocaleTimeString()