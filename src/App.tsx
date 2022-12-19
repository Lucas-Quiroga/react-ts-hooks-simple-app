import React, { useState } from 'react';
import './App.css';
import logo from "./logo.svg"


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



  return (
    <div className="App">

      <nav>
        <div>
          <img src={logo} style={{width: "4rem"}} alt="React Logo" />
          <a href="/">
            {title}
          </a>
        </div>
      </nav>

    <main className="container">
      
    </main>
    
    </div>
  );
}

export default App;
