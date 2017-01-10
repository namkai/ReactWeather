import React, {Component} from 'react';
import Nav from './nav';

let App = (props) => {
    return (
        <div>
            <Nav/>
            <h2>Main component</h2>
            {props.children}
        </div>
    )
}

export default App;
