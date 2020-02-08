import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline

} from 'react-icons/md';
import styled from 'styled-components';

const TodoListItemBox = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    &:nth-last-child(even) {
        background-color: #f8f9fa;
    }
    /* Add border betweens elements */
    & + & {
        border-top: 1px solid #dee2e6;
    }
`;

const TodoCheckBox = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    /* nested */
    && svg {
        font-size: 1.5rem;
    }
    && .checked {
        && svg {
            color: #22b8cf;
        }
    }
`;

const TodoText = styled.div`
    margin: 0 0.5rem;
    flex: 1;
    text-decoration: ${props => props.checked && "line-through" }
`;

const Remove = styled.div`
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
    &:hover {
        color: #000000;
    }
`;

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;

    return(
        <TodoListItemBox>
            <TodoCheckBox onClick={() => onToggle(id)}>
                { checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </TodoCheckBox>
            <TodoText checked={checked}>
                {text}
            </TodoText>
            <Remove onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </Remove>
        </TodoListItemBox>
    );
}

export default TodoListItem;
