import React, {Component} from 'react';

let WeatherMessage = ({temp, location}) => {
    if (!location) {
        return <div></div>
    }
    return (
        <h4>It is {temp} in {location}.</h4>
    );
}

export default WeatherMessage;
