import React, { useState } from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number+1)}>UP</button>
            <button onClick={() => setNumber(number - 1) }>Down</button>
        </div>
    );
}

export default Counter;
