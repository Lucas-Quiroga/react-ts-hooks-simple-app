import React, {ChangeEvent, FormEvent, useState} from 'react'
import { Task } from '../interfaces/Task'

interface Props {
  addANewTask: (task: Task) => void  
}

type handleInputChange =  ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const INITIAL_STATE = {
    title:"",
    description:""
}

const TaskForm = ({addANewTask}: Props) => {
  

const [task, setTask] = useState(INITIAL_STATE)

const handleInputChange = ({target: {name, value}}: handleInputChange) => {
    setTask({...task, [name]: value})
}

const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  addANewTask(task)
  setTask(INITIAL_STATE)
}

  return (
    <div>
        <h1>Add Task</h1>
        <form onSubmit={handleNewTask}>
            <input type="text"  name='title' placeholder='write a title' onChange={handleInputChange} value={task.title}/>

            <textarea name="description" rows={2} placeholder="Write a Description" onChange={handleInputChange} value={task.description}></textarea>

            <button>Save</button>
        </form>
    </div>
  )
}

export default TaskForm