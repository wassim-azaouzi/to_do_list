import './App.css';
import Form from './components/form.jsx';
import Display from './components/display';
import { useState } from 'react';

function App() {
  const [tasks, setTasks]= useState([]);
  const handleTask= (list)=>{
    setTasks(list);
  }
  
  return (
    <div className="App">
      <Form tasks={handleTask}></Form>
      <p>{JSON.stringify(tasks)}</p>
      <Display tasks={tasks}></Display>
    </div>
  );
}

export default App;
