import './style.css'

interface ITaskProps{
    id: number,
    title: string,
    completed: boolean
}

function isCompleted(status: boolean){
    if(status) return "Completado"
    return "Não completado"
}

const Task = (props: ITaskProps) => {
    return (
        <div className='task-container'>
            <h4> Id: {props.id} </h4>
            <h4> Title: {props.title} </h4>
            <h4> Completed: {isCompleted(props.completed)}</h4> 
        </div>
    )
}

export type {ITaskProps}
export {Task}