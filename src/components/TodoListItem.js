import React from 'react';
import { MdCheckBoxOutlineBlank,  MdRemoveCircleOutline, MdCheckBox } from "react-icons/md";
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({todo}) => {
    const { text, checked} = todo;

    return (
        <div className="AppListItem">
             <div className={cn('Checkbox', {checked})}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    <div className="Text">{text}</div>
                </div>
                <div className="Remove"><MdRemoveCircleOutline /></div>
        </div>
    );
};
export default TodoListItem;