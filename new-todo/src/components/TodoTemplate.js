import React from 'react';
import styled from 'styled-components';

const TodoTemplateBox = styled.div `
    width: 512px;
    margin: 6px auto;
    border-radius: 4px;
    overflow: hidden;
`;

const AppTitle = styled.div `
    background-color: #22b8cf;
    color: #ffffff;
    padding: 1rem 0;
    font-size: 1.5rem;
    text-align: center;
`;

const Content = styled.div`
    background-color: white;    
`;

const TodoTemplate = ({ children }) => {
    return (
        <TodoTemplateBox>
            <AppTitle>TODO APP</AppTitle>
            <Content>{children}</Content>
        </TodoTemplateBox>
    );
}

export default TodoTemplate;
