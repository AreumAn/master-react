import React from 'react';
import CounterContainer from './containers/CounterContainer';
import Todos from './componenets/Todos';

function App() {
    return (
        <div>
            <CounterContainer />
            <hr />
            <Todos />
        </div>
    );
}

export default App;
