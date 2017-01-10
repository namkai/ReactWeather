import React from 'react';
import axios from 'axios';
const API_KEY = `ebb4a5cb254e7dfe93847432ec122c0d`;
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}&units=imperial`;


export function getTemp(location) {
        let encodedLocation = encodeURIComponent(location);
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then((res) => {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, (res) => {
            throw new Error(res.data.message);
        });

    }
