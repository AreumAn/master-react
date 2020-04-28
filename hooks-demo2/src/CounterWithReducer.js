import React, { useReducer } from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            return state;
    }
}

const CounterWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 });
    return(
        <>
            <div>Current Counter: {state.value} </div>
            <button onClick={() => dispatch({ type: 'INCREMENT'})}> + 1 </button>
            <button  onClick={() => dispatch({ type: 'DECREMENT'})}> - 1 </button>
        </>
    );
}

export default CounterWithReducer;
