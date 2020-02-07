import React, { useState } from 'react';
import Counter from 'Counter';
import Info from 'Info';
import Average from 'Average';

const App = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button
                onClick={() => {
                    setVisible(!visible);
                }}>{visible ? 'HIDE' : 'SHOW'}</button>
            <hr />
                {visible && <Info />}
            <Counter />
            <hr />
            <Average />
        </div>
    );
}

export default App;
