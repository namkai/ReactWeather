import React, {Component} from 'react';

export default class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event) {
        this.setState({term: event.target.value})
    }
    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSearch(this.state.term);
        this.setState({term: ''});
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type='text' placeholder="Enter city" value={this.state.term} onChange={this.onInputChange}></input>
                    <br/>
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
}
