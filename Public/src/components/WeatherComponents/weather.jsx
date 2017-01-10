import React, {Component} from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import {getTemp} from './openWeatherMap';


export default class Weather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: '',
            temp: 88
        }
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(location) {
        let that = this;

        getTemp(location).then((temp) => {
            that.setState({
                location: location,
                temp: temp
            })
        }, (errorMessage) => {
            alert(errorMessage)
        })
    }
    render() {
        let {temp, location} = this.state;
        return (
            <div>
                <h3>Get Weather</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage temp={temp} location={location}/>
            </div>
        );
    }
}
