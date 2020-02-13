import React from 'react';
import { ColorConsumer } from 'contexts/color';

const colors = [
    'red',
    'green',
    'yellow',
    'orange',
    'blue',
    'indigo'
];

const SelectColors = () => {
    return (
        <div>
            <h2>Select Color.</h2>
            <ColorConsumer>
                {({ actions }) => (
                    <div style={{display: 'flex'}}>
                        {colors.map(color => (
                            <div
                                key={color}
                                style={{
                                    background: color,
                                    width: '24px',
                                    height: '24px',
                                    cursor: 'pointer'}}
                                onClick={() => actions.setColor(color)}
                                onContextMenu={(e) => {
                                    e.preventDefault();
                                    actions.setSubcolor(color);
                                }}
                                />
                            ))}
                    </div>
                )}
            </ColorConsumer>
            <hr/>
        </div>
    );
}

export default SelectColors;
