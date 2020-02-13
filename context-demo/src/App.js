import React from 'react';
import ColorBox from './contexts/ColorBox';
import ColorContext from './contexts/color';

const App = () => {
    return (
        // Provider should declare value
        <ColorContext.Provider value={{ color: 'red' }}>
            <div>
                <ColorBox />
            </div>
        </ColorContext.Provider>
    );
}

export default App;
