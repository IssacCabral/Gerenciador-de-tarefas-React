import './App.css'
import { useState } from "react"
import { ITaskProps } from './components/Task/Task'
import Tasks from './components/Task/Tasks'
import AddTask from './components/Button/AddTask'

// function App() {
//   const [tasks, setTasks] = useState<string[]>([
//     'Task 1',
//     'Task 2',
//     'Task 3'
//   ])

//   function createTask(){
//     setTasks([...tasks, "Nova Task"])
//   }

//   return (
//     <>
//       <div className="container">
//         {tasks.map(task => {
//           return <Task text={task}/>
//         })}

//         <button onClick={createTask}>Adicionar outra task</button>  
//       </div>

//     </>
//   )
// }

function App() {
  const [tasks, setTasks] = useState<Array<ITaskProps>>([
    {
      id: 1,
      title: 'Aprendendo React',
      completed: false
    },
    {
      id: 2,
      title: 'Aprendendo BackEnd',
      completed: true
    }
  ])


  function handleTaskClick(taskId: number){
    const newTasks = tasks.map(task => {
      if(taskId == task.id){
        return {...task, completed: !task.completed}
      }
      return task
    })

    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle: any) => {
    const newTasks = [...tasks, {
      id: Math.random(),
      title: taskTitle,
      completed: false
    }]

    setTasks(newTasks)
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>

      </div>
    </>
  )
}

export default App