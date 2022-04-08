import './style.css'

interface ITaskProps{
    id: number,
    title: string,
    completed: boolean,
    handleTaskClick?: any
}

const Task = (props: ITaskProps) => {
    return (
        <div className='task-container' style={props.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
            <div className='task-title' onClick={() => props.handleTaskClick(props.id)}>
                {props.title}
            </div>
        </div>
    )
    // return (
    //     <div className='task-container'>
    //         <h4> {props.title} </h4>
    //     </div>
    // )
}

export type {ITaskProps}
export {Task}