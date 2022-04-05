import './style.css'
interface ITaskProps{
    id: number,
    title: string,
    completed: boolean
}

const Task = (props: ITaskProps) => {
    return (
        <div className='task'>
            <h4>Id: {props.id}</h4>
            <h4>Title: {props.title}</h4>
            {if(props.completed === true) {
                
            }}
            <h4>Completed:</h4>
        </div>
    )
}

const Tasks = (props: any) => {
    return (
        <div>
            <h1>Tudo ok por aqui</h1>
        </div>
    )
}

export {Task, Tasks}