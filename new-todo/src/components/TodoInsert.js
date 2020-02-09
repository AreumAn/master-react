import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';

const TodoInsertForm = styled.form`
    display: flex;
    background-color: #495057;
`;

const TodoInput = styled.input`
    flex: 1;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.2rem;
    line-height: 1.5;
    /* add attribute */
    &::placeholder {
        color: #dee2e6;
    }
`;

const TodoInputBtn = styled.button`
    outline: none;
    background-color: #868e96;
    color: #ffffff;
    background: none;
    padding: 0 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    /* add action */
    &:hover {
        background: #adb5bd;
    }
`;

const TodoInsert = ({ onInsert }) => {
    const [insertValue, setInsertValue] = useState('');

    const onChange = useCallback((e) => {
        setInsertValue(e.target.value);
    }, []);

    const onSubmit = useCallback((e) => {
        onInsert(insertValue);
        setInsertValue('');
        e.preventDefault();
    }, [onInsert, insertValue]);

    return (
        <TodoInsertForm onSubmit={onSubmit}>
            <TodoInput
                value={insertValue}
                onChange={onChange}
                placeholder="Type what to do"/>
            <TodoInputBtn type="submit">
                <MdAdd />
            </TodoInputBtn>
        </TodoInsertForm>
    );
}

export default TodoInsert;
