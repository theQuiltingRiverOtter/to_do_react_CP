import { useState } from 'react'
import './App.css'
import Task from "./Task.jsx"
import Form from "./Form.jsx"

function App() {
  const [tasks, setTasks] = useState([]);


  function addTask(e, taskDesc) {
    e.preventDefault();
    const newTask = { id: crypto.randomUUID(), task: taskDesc, completed: false }
    setTasks(prevTasks => {
      return [...prevTasks, newTask]
    })
  }


  const deleteTask = (e) => {
    e.stopPropagation();
    const newTasks = tasks.filter(task => e.target.id != task.id);
    setTasks(newTasks);
  }

  return (

    <>
      <h1>To Do List</h1>
      <Form addTask={addTask} />
      <ul id='list'>
        {tasks.map((task => (
          <Task key={task.id} taskId={task.id} taskName={task.task} taskComplete={task.completed} handleClick={deleteTask} />
        )))}
      </ul >
    </>
  )
}

export default App
