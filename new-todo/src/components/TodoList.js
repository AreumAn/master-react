import React from 'react';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';

const TodoListBox = styled.div `
    min-height: 320px;
    max-height: 513px;
    overflow-y: auto;
`;

const TodoList = ({todos, onRemove, onToggle}) => {
    return (
        <TodoListBox>
            {todos.map(todo => 
                <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />
            )}
        </TodoListBox>
    );
}

export default TodoList;
