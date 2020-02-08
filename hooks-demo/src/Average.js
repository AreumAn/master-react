import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
    console.log('get Average...');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a +b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []); // only create when component rendering at the first time

    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]); // only create when `number` or `list` change

    // useMemo let getAverage only excute when list changes, it will not excute when the user adds input value.
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>Add number</button>
            <ul>
                {list.map((value, idx) => (
                    <li key={idx}>{value}</li>
                ))}
            </ul>
            <div>
                <b>Average: </b>{avg}
            </div>
        </div>
    );
}

export default Average;
