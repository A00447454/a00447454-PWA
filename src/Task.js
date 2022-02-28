export const Task = ({id, name, date, assign}) => {
    return (
        <div className="Task">
            <h1>{id}-{name}</h1>
            <h2>{date}</h2>
            <p>{assign}</p>
        </div>
    )
}