import React from 'react'
import { Task } from '../interfaces/Task';

interface Props {
    tasks: Task[];
}

const TaskList = ({tasks}: Props) => {
  return (
    <div>{tasks.map(task => (
        <div>
          <h2>{task.title}</h2>
        </div>
      ))}</div>
  )
}

export default TaskList