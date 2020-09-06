import React from 'react';
import './style.css';

export class App extends React.Component {

    state = {
        counter: 0
    }

    componentDidMount() {
        // Fetch information from backend
    }

    updateCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    resetCounter = () => {
        this.setState({
            counter: 0
        });
    }

    render() {
        const { counter } = this.state;

        return (
            <div>
                <h1>This is my counter</h1>
                <p>{counter}</p>
                <button onClick={this.updateCounter}>Update Counter</button>
                <button onClick={this.resetCounter}>Reset Counter</button>
            </div>
        );
    }
}