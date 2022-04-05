import './App.css'
import { useState } from "react"
import {Task, Tasks} from './components/Task/index'

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
  const [tarefas, setTasks] = useState([
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

  return (
    <>
      <div className="container">
        <Task id={1} title={"Alguma coisa"} completed={false}/>
      </div>
    </>
  )
}

export default App
