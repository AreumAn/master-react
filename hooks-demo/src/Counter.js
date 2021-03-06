import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value -1 };
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 });

    return(
        <div>
            <h1>{state.value}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT'})}>UP</button>
            <button onClick={() => dispatch({ type: 'DECREMENT'})}>Down</button>
        </div>
    );
}

export default Counter;
