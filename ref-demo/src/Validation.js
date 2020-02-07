import React, { Component } from 'react';
import 'Validation.css';

class Validation extends Component {
    state = {
        password: '',
        clicked: false,
        Validated: false
    }

    handleChange = (e) => {
        this.setState({ password: e.target.value });
    }

    handleButtonClick = () => {
        this.setState({ 
            clicked: true,
            Validated: this.state.password === '0000'
        });
        this.input.focus();
    }

    render() {
        return (
            <div>
                <input
                    ref={(ref) => this.input = ref}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.Validated ? 'sucess' : 'failure') : '' } />
                    <button onClick={this.handleButtonClick}>Check Validation</button>
            </div>
        );
    }
}

export default Validation;
