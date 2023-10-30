import { useState } from 'react'
import './App.css'

function App() {
  let [tasks, setTasks] = useState([])
  function addTask(e) {
    e.preventDefault();
    const task = e.target[0].value
    setTasks(prevTasks => {
      return [...prevTasks, { id: crypto.randomUUID(), task: task, completed: false }]
    })
    e.target[0].value = '';
  }

  const markComplete = (e) => {
    e.stopPropagation();
    const newTasks = tasks.map(task => {
      if (e.target.id == task.id) {
        task.completed = !task.completed;
      }
      return task;
    })
    setTasks(newTasks)
  }

  const deleteTask = (e) => {
    e.stopPropagation();
    const newTasks = tasks.filter(task => e.target.id != task.id);
    setTasks(newTasks);
  }


  return (

    <>
      <h1>To Do List</h1>


      <form onSubmit={(e) => addTask(e)}>
        <input id='task' type='text'></input>
        <button className='toDoBtn' type='submit'>Submit</button>
      </form >
      <ul id='list'>
        {tasks.map((task) => {
          return <li onClick={markComplete} key={task.id} className={(task.completed) ? 'complete' : 'incomplete'
          }> <span id={task.id}>{task.task}</span> <button id={task.id} className='deletBtn' onClick={deleteTask}>Delete</button></li>
        })}
      </ul >
    </>
  )
}

export default App
