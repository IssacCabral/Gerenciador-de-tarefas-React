import {Task, ITaskProps} from './Task'

interface ITasksProps{
    tasks: Array<ITaskProps>
}

const Tasks = (props: ITasksProps) => {
    return (
        <div>
            {props.tasks.map(task => {
                return <Task id={task.id} title={task.title} completed={task.completed}/>
            })}
        </div>
    )
}

export default Tasks