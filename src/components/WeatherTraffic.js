import React from 'react';

const WeatherTraffic = ({ weather, traffic }) => {
    return (
        <div>
            <h2>Weather</h2>
            <p>{weather}</p>
            <h2>Traffic</h2>
            <p>{traffic}</p>
        </div>
    );
};

export default WeatherTraffic;