import React, { Component } from 'react';
import LifeCycle from 'LifeCycle';
import ErrorBoundary from 'ErrorBoundary';

function getRandomColor() {
    // 16777215 is ffffff(hex)
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
    state = {
        color: '#000000'
    }

    handleClick = () => {
        console.log('====== Click get color! ======');
        this.setState({
            color: getRandomColor()
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Get Color!</button>
                <ErrorBoundary><LifeCycle color={this.state.color}/></ErrorBoundary>
            </div>
        );
    }
}

export default App;
