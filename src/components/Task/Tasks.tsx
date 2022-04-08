import {Task, ITaskProps} from './Task'

interface ITasksProps{
    tasks: Array<ITaskProps>,
    handleTaskClick?: any
}

const Tasks = (props: ITasksProps) => {
    return (
        <div>
            {props.tasks.map(task => {
                return <Task id={task.id} title={task.title} completed={task.completed} handleTaskClick={props.handleTaskClick}/>
            })}
        </div>
    )
}

export default Tasks