import { db } from './db'

export function getTasksFromDB() {
    return db.task.toArray().then((data) => {
        return data
    })
}

export function addTaskToDB(name, date, assign) {
    console.log(name, date, assign);
    db.task.put({ name, date, assign})
        .then(() => true)
        .catch(err => {
            alert("Error...." + err)
        })
}