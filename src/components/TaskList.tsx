import React from 'react'
import { Task } from '../interfaces/Task';
import TaskCard from './TaskCard';

interface Props {
    tasks: Task[];
}

const TaskList = ({tasks}: Props) => {
  return (
    <div>{tasks.map(task => (
        <div><TaskCard task={task}/></div>
      ))}</div>
  )
}

export default TaskList