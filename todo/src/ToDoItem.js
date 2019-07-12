import React from 'react'

export default function ToDoItem(props) {
    return (
        <div className="ToDoItem">
            {props.item}
            <button id={props.item} onClick={() => props.taskRemove(props.item)}> - </button>
        </div>
    )
}
