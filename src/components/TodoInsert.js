import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { MdAdd } from "react-icons/md";

const TodoInsert = ( onInsert ) => {
    const [ value, setValue] = useState('');
    
    const onChange = useCallback(e => {setValue(e.target.value);},[]);

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    },[onInsert, value]);

    const onClick = useCallback(()=> {
        onInsert(value);
        setValue('');
    },
    [onInsert, value],
    );

    return (
        <div>
            <AppInsert onSubmit={onSubmit}>
                <TextInput placeholder='할 일을 입력하시오' value={value} onChange={onChange}></TextInput>
                <InsertButton onClick={onClick} type="submit"><MdAdd/></InsertButton>
            </AppInsert>
        </div>
    );
};

const AppInsert = styled.form`
display: flex;
background: #495057;
`;

const TextInput = styled.input`
background: none;
outline: none;
border: none;
padding: 0.5rem;
font-size: 1.125rem;
line-height: 1.5;
color: white;
&::placeholder{
    color: #dee2e6;
}
flex: 1;

`;

const InsertButton = styled.button`
background: none;
outline: none;
border: none;
background: #868e96;
color: white;
padding-left: 1rem;
padding-right: 1rem;
font-size: 1.5rem;
display: flex;
align-items: center;
cursor: pointer;
transition: 0.1s background ease-in;
&:hover{
    background: #adb5bd;
}
`;

export default TodoInsert;