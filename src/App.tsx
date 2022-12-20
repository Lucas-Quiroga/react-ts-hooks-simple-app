import React, { useState } from 'react';
import './App.css';
import { Task } from './interfaces/Task';
import logo from "./logo.svg"
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';


interface Props {
  title?: string;
}


function App({title}: Props) {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React",
      completed: false,
    }
  ])

  //para generar un id distinto
  const getCurrentTimeStamp = (): number => new Date().getTime();

  const addANewTask = (task: Task) => {
    setTasks([...tasks, {...task, id:getCurrentTimeStamp() , completed: false}])
  }

  const deleteATask = (id: number) =>{
   setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="App">

      <nav>
        <div>
          <img src={logo} style={{width: "4rem"}} alt="React Logo" />
          <a href="/">
            {title && <h1>{title}</h1>}
          </a>
        </div>
      </nav>

    <main className="container">
      
    </main>

    <div><TaskForm addANewTask={addANewTask} /></div>

    <div><div><TaskList tasks={tasks} deleteATask={deleteATask}/></div></div>

    
    </div>
  );
}

export default App;
