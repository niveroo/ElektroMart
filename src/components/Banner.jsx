import '/src/styles/Banner.css'
import Logo from './Logo';
import { useState } from 'react'
import Time from './Time';
import SearchLine from './SearchLine';

const Banner = () => {
    return (
        <div className="banner">
            <Logo />
            <SearchLine />
            <Time />
        </div>
    );
};

export default Banner;

// now.toLocaleTimeString()