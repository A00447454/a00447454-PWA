import React from 'react';
import { useState, useRef } from 'react'
import { addTaskToDB } from './dbOperation'

function Form() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [assign, setAssign] = useState("");

    const nameT = useRef(null);
    const dateT = useRef(null);
    const assignT = useRef(null);

    const submitForm = async () => {
        await addTaskToDB(name, date, assign)
    }

    return (
        <div>
            <form>

                <label>Task name</label>
                <input
                    ref={nameT}
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Task name:"
                />

                <label>Due date</label>
                <input
                    ref={dateT}
                    type="text"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="DD/MM/YYYY"
                />

                <label>Assigned</label>
                <input
                    ref={assignT}
                    type="text"
                    id="assign"
                    value={assign}
                    onChange={(e) => setAssign(e.target.value)}
                    placeholder="Assigned"
                />

                <button onClick={() => submitForm()}>Add Task</button>
            </form>
        </div>
    )
}

export default Form;

