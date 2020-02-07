import React, { useState } from 'react';
import Counter from 'Counter';
import Info from 'Info';

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
        </div>
    );
}

export default App;
