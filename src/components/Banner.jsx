import '/src/styles/Banner.css'
import Logo from './Logo';
import { useState } from 'react'
import Time from './Time';

const Banner = () => {
    const [time, setTime] = useState(new Date());
    setInterval(() => setTime(new Date()), 1000)

    return (
        <div className="banner">
            <Logo />
            <Time />
        </div>
    );
};

export default Banner;

// now.toLocaleTimeString()