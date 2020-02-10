import React, { Component } from 'react';

class History extends Component {

    handleGoBack = () => {
        this.props.history.goBack();
    };

    handleGoHome = () => {
        this.props.history.push('/');
    };

    componentDidMount() {
        this.unblock = this.props.history.block('Are you sure you want to leave this page?');
    }

    componentWillUnmount() {
        // Stop asking after component unmount
        if (this.unblock) {
            this.unblock();
        }
    }


    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>Go Back</button>
                <button onClick={this.handleGoHome}>Go Home</button>
            </div>
        );
    }
}

export default History;
