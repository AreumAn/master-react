import React, { useState } from 'react';

const Counter = () => {
    const [counterVal, setCounterVal] = useState(0);
    return (
        <>
            <div>Current Counter: {counterVal} </div>
            <button onClick={() => setCounterVal(counterVal + 1)}> + 1 </button>
            <button  onClick={() => setCounterVal(counterVal - 1)}> - 1 </button>
        </>
    );
}

export default Counter;
