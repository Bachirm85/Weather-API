import React from 'react';

import storm from "../img/weather-icons/storm.svg";
import './WeatherNow.css';

// props = {
//     description: 'overcast',
//     temperature: '10 to 11'
// }

const WeatherNow = (props) => {
    return (
        <div className='weather-now-container'>
            <img className='img' src={storm} alt="storm icon" />
            <p className='description'>{props.description}</p>
            <p className='temp'>Tempeature <span>{props.temperature}</span></p> 
            <p className='humidity'> Humidity <span>78% </span>Presure <span>100848</span></p>
        </div>
    )
}

export default WeatherNow
