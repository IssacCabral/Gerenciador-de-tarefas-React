import { Task } from "./Task"
interface ITask{
    id: number,
    title: string,
    completed: boolean
}

interface ITasks{
    tasks: Array<ITask>
}

const Tasks = (props: ITasks) => {
    return (
        <div>
            <h2>MInhas tasks: {props.tasks.map(task => {
                return <Task id={task.id} title={task.title} completed={task.completed}/>
            })}</h2>
        </div>
    )
}

export default Tasks