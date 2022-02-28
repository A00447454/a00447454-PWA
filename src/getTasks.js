import { useState, useEffect } from "react"
import { getTasksFromDB } from "./dbOperation"
import { Task } from "./Task"

function Tasks () {
    const [tasksList, setTasksList] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const existingTasks = await getTasksFromDB()
        setTasksList(existingTasks)
    }, [])

    return (
        <div>
            {tasksList ?
                tasksList.map((task, index) => <Task key={index} id={task.id} name={task.name} date={task.date} assign={task.assign} />)
                : "Loading..."}
        </div>
    )
}

export default Tasks;