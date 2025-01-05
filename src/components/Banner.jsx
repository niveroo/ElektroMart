import '/src/styles/Banner.css'
import Logo from './Logo';
import { useState } from 'react'
import Time from './Time';

const Banner = () => {
    return (
        <div className="banner">
            <Logo />
            <Time />
        </div>
    );
};

export default Banner;

// now.toLocaleTimeString()