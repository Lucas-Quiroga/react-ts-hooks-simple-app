import React, {ChangeEvent, useState} from 'react'


const TaskForm = () => {

const [task, setTask] = useState({
    title:"",
    description:""
})

const handleInputChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTask({...task, [name]: value})
}

  return (
    <div>
        <h1>Add Task</h1>
        <form>
            <input type="text"  name='title' placeholder='write a title' onChange={handleInputChange}/>

            <textarea name="description" rows={2} placeholder="Write a Description" onChange={handleInputChange}></textarea>

            <button>Save</button>
        </form>
    </div>
  )
}

export default TaskForm