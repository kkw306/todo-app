import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {
    return (
        <div>
            <AppList>
                {todos.map(todo => (
                    <TodoListItem todo={todo} key={todo.id} />
                ))}
            </AppList>
        </div>
    );
};

const AppList = styled.div`
min-height: 320px;
max-height: 513px;
overflow-y: auto;
`;


export default TodoList;