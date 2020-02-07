import React, { Component } from 'react';
import Validation from 'Validation';
import ScrollBox from 'ScrollBox';

class App extends Component {
    render() {
        return (
        <div>
            <Validation></Validation>
            <ScrollBox ref={(ref) => this.scrollBox = ref}/>
            <button onClick={() => this.scrollBox.scrollToBottom()}>GO TO BOTTOM</button>
        </div>
        );
    }
}

export default App;
