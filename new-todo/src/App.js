import React, { useState, useCallback, useRef } from 'react';
import TodoTemplate from 'components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function creatBulkTodos() {
    const array = [];
    for (let i = 1; i <= 2500; i++) {
        array.push({
            id: i,
            text: `What to do ${i}`,
            checked: false,
        })
    }
    return array;
}

const App = () => {
    const [todos, setTodos] = useState(creatBulkTodos);

    let nextId = useRef(2501);

    const onInsert = useCallback((text) => { 
        const newTodo = [{
            id: nextId.current,
            text,
            checked: false,
        }]

        setTodos(todos => todos.concat(newTodo));
        nextId.current += 1;

    },[]);

    const onRemove = useCallback((id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }, []);

    const onToggle = useCallback((id) => {
        setTodos(todos =>
            todos.map(todo => 
                todo.id === id ? {
                    ...todo,
                    checked: !todo.checked
                } : todo
            )
        );
    }, []);

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
    );
}

export default App;
