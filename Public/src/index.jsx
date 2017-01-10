import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import App from './components/app';
import Weather from './components/WeatherComponents/weather';
import About from './components/about';
import Examples from './components/examples';


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.querySelector('.container')
);
