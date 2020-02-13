import React from 'react';
import { ColorConsumer } from 'contexts/color';

const ColorBox = () => {
    return (
        <ColorConsumer>
            {/* Fuction as a child or Render Props */}
            {({ state }) => (
                <>
                    <div 
                        style={{
                            width: '64px',
                            height: '64px',
                            background: state.color
                        }}
                    />
                    <div 
                        style={{
                            width: '32px',
                            height: '32px',
                            background: state.subcolor
                        }}
                    />
                </>
            )}
        </ColorConsumer>
    );
};

export default ColorBox;
