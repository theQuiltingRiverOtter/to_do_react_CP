import { useState } from "react"

function Task({ taskName, taskComplete, handleClick, taskId }) {
    const [isTaskComplete, setIsTaskComplete] = useState(taskComplete)
    return (
        <li onClick={() => setIsTaskComplete(!isTaskComplete)} className={(isTaskComplete) ? 'complete' : 'incomplete'}>
            <span>{taskName}</span>
            <button id={taskId} className='deletBtn' onClick={handleClick}>Delete</button>
        </li>
    )
}

export default Task;