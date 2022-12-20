import React from 'react'
import { Task } from '../interfaces/Task';
import TaskCard from './TaskCard';

interface Props {
    tasks: Task[];
    deleteATask: (id:number)=> void;
}

const TaskList = ({tasks, deleteATask}: Props) => {
  return (
    <div>{tasks.map(task => (
        <div key={task.id}><TaskCard task={task} deleteATask={deleteATask}/></div>
      ))}</div>
  )
}

export default TaskList