import { useState } from 'react'
import '/src/styles/Time.css'

const Time = () => {
    const [time, setTime] = useState(new Date());
    setInterval(() => setTime(new Date()), 1000)

    return (
        <div className="time">
            <span>Time: {time.toLocaleTimeString()}</span>
        </div>
    );
};

export default Time;