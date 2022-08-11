import React from 'react';
import styled from 'styled-components';

const TodoTemplate = ({ children }) => {
    return (
        <AppTemplate>
            <AppTtitle>일정 관리</AppTtitle>
            <Content>{children}</Content>
        </AppTemplate>
    );
};

const AppTemplate = styled.div`
width: 512px;
margin-left: auto;
margin-right: auto;
margin-top: 6rem;
border-radius: 4px;
overflow: hidden;
`;

const AppTtitle = styled.div`
background: #22b8cf;
color: white;
height: 4rem;
font-size: 1.5rem;
display:flex;
align-items: center;
justify-content: center;`
;

const Content = styled.div`
background: white;
`;


export default TodoTemplate;