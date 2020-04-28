import React, { useState, useMemo, useRef, useCallback } from 'react';

const getAverage = nums => {
    console.log(nums);
    if(nums.length === 0) return 0;
    const sum = nums.reduce((a,b) => a + b);
    return sum / nums.length;
}

const Average = () => {
    const [nums, setNums] = useState([]);
    const [num, setNum] = useState('');

    const inputEl = useRef(null);

    const onChangeHandler = useCallback(e => {
        setNum(e.target.value);
    }, []);

    const onClickHandler = useCallback(e => {
        const nextNums = nums.concat(parseInt(num));
        setNums(nextNums);
        setNum('');
        inputEl.current.focus();
    }, [nums, num]);

    const avg = useMemo(() => getAverage(nums), [nums]);

    return(
        <>
            <input value={num} onChange={onChangeHandler} ref={inputEl}/>
            <button onClick={onClickHandler}>Register</button>
            <ul>
                {nums.map((num, idx) => (
                    <li key={idx}>{num}</li>
                ))}
            </ul>
            <div>Average: {avg} </div>
        </>
    );
}

export default Average;
