import './style.css'

interface ITask{
    id: number,
    title: string,
    completed: boolean
}

const Task = (props: ITask) => {
    return (
        <div className='task'>
            <h4>Id: {props.id}</h4>
            <h4>Title: {props.title}</h4>
            <h4>Completed: {props.completed}</h4>
        </div>
    )
}

export {Task}