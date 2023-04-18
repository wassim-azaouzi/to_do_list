import React, { useState } from 'react';

const Form= (props)=>{
    const [newtask, setNewtask]= useState('');
    const [tasks, setTasks]= useState([]);

    const handleAdd=(e)=>{
        e.preventDefault();
        setTasks([...tasks, {label:newtask, completed:false}]);
        setNewtask('');
    }
    
    
    return(
    <div>
        <form onSubmit={handleAdd}>
            <input type="text" onChange={(e)=>setNewtask(e.target.value)} value={newtask}></input>
            <button>Add</button>
        </form>
        <p>{JSON.stringify(tasks)}</p>
        {props.tasks(tasks)}
    </div>
    
    );
    
}

export default Form;