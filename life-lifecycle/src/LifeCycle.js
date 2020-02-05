import React, { Component } from 'react';

class LifeCycle extends Component {
    state = {
        number: 0,
        color: null,
    }

    myRef = null;

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDeriverdStateFromProps');
        if (nextProps.color !== prevState.color) {
            return { 
                color: nextProps.color
            };
        }
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        // If the number is multiple of 3, it will not re-render
        return nextState.number % 3 !== 0;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = (e) => {
        console.log('======== Click Button ==========');
        this.setState({ number: this.state.number + 1 });
    }

    // getSnapshotBeforeUpdate() should be used with componentDidUpdate()
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot) {
            console.log('The color before update', snapshot);
        }
    }

    render() {
        console.log('render');
        const style = {
            color: this.props.color
        };

        return (
            <div>
                <h1 style={style} ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>Add number</button>
            </div>
        );
    }
}

export default LifeCycle;
