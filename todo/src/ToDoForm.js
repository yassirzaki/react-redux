import React from 'react'

export default function ToDoForm (props) {

    function handleSubmit (e){
        e.preventDefault();
        props.taskAdd(props.taskValue);
        props.taskUpdate("");
    }

        return (
            <div className="ToDoForm" >
                <h2> FORM TO ADD TASK</h2>  
                <form onSubmit={handleSubmit}>
                    <input value={props.taskValue} onChange={(e) => props.taskUpdate(e.target.value)} />
                    <button>+</button>
                </form>        
            </div>
        )
}
