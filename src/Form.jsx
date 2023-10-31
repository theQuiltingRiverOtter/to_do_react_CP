import { useState } from "react";

function Form({ addTask }) {
    const [formInput, setFormInput] = useState("");

    const handleSubmit = (e) => {
        addTask(e, formInput);
        setFormInput("")
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input id='task' onChange={(e) => setFormInput(e.target.value)} type='text' value={formInput}></input>
            <button className='toDoBtn' type='submit'>Submit</button>
        </form >
    )
}

export default Form;