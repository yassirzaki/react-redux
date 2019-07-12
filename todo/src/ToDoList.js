import React from 'react'
import ToDoItem from './ToDoItem';

export default function ToDoList(props) {
    console.log(props.taskList);
    const tasksJsx = props.taskList.map((v) => (
        <ToDoItem 
            key={v} 
            item={v} 
            taskRemove={props.taskRemove}
        />
    )
    );

    return (
        <div className="ToDoList">
            <div>
                <h2>TASK LIST</h2>
            </div>
            {tasksJsx}
        </div>
    )
}
