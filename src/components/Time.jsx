import { useState } from 'react'
import { useEffect } from 'react';
import '/src/styles/Time.css'

const Time = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="time">
            <span>Time: {time.toLocaleTimeString()}</span>
        </div>
    );
};

export default Time;