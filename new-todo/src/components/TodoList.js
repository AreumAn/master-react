import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized';

const TodoList = ({todos, onRemove, onToggle}) => {

    const rowRenderer = useCallback(
        ({ index, key, style }) => {
            const todo = todos[index];
            return (
                <TodoListItem 
                    key={key} 
                    todo={todo} 
                    onRemove={onRemove} 
                    onToggle={onToggle} 
                    style={style}
                />
            );
        }, 
        [onRemove, onToggle, todos],
    );
    return (
        <List 
            width={513}
            height={513}
            rowCount={todos.length}
            rowHeight={63}
            rowRenderer={rowRenderer}
            list={todos}
            style={{ outline: 'none' }}
        />
    );
}

export default React.memo(TodoList);
