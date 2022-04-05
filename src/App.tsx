import './App.css'
import { useState } from "react"
import Tasks from './components/Task/Tasks'

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
        <h1>Eae</h1>
        <Tasks tasks={tarefas}/>
      </div>
    </>
  )
}

export default App
