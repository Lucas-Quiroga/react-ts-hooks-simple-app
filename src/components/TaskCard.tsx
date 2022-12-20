import React from 'react'
import { Task } from '../interfaces/Task'

interface Props {
    task: Task
    deleteATask:(id:number)=> void;
}

const TaskCard = ({task}: Props) => {
  return (
<div>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>{task.id}</p>
          <button>Delete</button>
        </div>  )
}

export default TaskCard