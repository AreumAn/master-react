import React, { Component } from "react";

class EventPractice extends Component {
    state = {
        name: '',
        message: ''
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnClick = (e) => {
        alert(this.state.name + this.state.message);
        this.setState({ 
            name: '',
            message: ''
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleOnClick();
        }
    }

    render() {
        return(
            <div>
                <h1>Event Practice</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="put your name"
                    value={this.state.name}
                    onChange={this.handleOnChange}></input>
                <input
                    type="text"
                    name="message"
                    placeholder="put your massage"
                    value={this.state.message}
                    onChange={this.handleOnChange}
                    onKeyPress={this.handleKeyPress}></input>
                <button onClick={this.handleOnClick}>Click</button>
            </div>
        );
    }
}

export default EventPractice;
