import React from 'react';


const Display= (props)=>{
    let tasks=props.tasks;

    const changeHandler=(e,task)=>{
        task.completed=!task.completed;
        }

        const handleDelete=(e,index)=>{
            tasks.splice(index, 1);
        }

    return(
    <div>
        {
        tasks.map( (task, index)=>
        
            { return (
                <div>
                    <label key={index} style={task.completed?{textDecoration: "line-through"}:{}}>{task.label}</label>
                    <input type="checkbox" onChange={(e)=>changeHandler(e,task)} checked={task.completed}></input>
                    <button onClick={(e)=>handleDelete(e,index)}>Delete</button>
                    <p>{JSON.stringify(task.completed)}</p>
                </div>
            )  
            }
            
        
        )
        }
        <p>{JSON.stringify(tasks)}</p>
    </div>
    );
    
}

export default Display;