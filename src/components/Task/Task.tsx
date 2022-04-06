import './style.css'

interface ITaskProps{
    id: number,
    title: string,
    completed: boolean
}

function isCompleted(status: boolean){
    if(status) return "true"
    return "false"
}

const Task = (props: ITaskProps) => {
    return (
        <div className='task-container'>
            <h4> {props.title} </h4>
        </div>
    )
}

export type {ITaskProps}
export {Task}