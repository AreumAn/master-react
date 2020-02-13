import React from 'react';
import ColorBox from './contexts/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColors from './contexts/SelectColors';

const App = () => {
    return (
        // Provider should declare value
        <ColorProvider>
            <div>
                <SelectColors />
                <ColorBox />
            </div>
        </ColorProvider>
    );
}

export default App;
