import './App.css'
import { useState } from "react"
import {ITaskProps} from './components/Task/Task'
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
  const [tarefas, setTasks] = useState<Array<ITaskProps>>([
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

  function insereTasks(){
    setTasks([...tarefas, {id: 3, title: "terceiro", completed: false}])
  }

  return (
    <>
      <div className="container">
        <AddTask/>
        <Tasks tasks={tarefas}/>

      </div>
    </>
  )
}

export default App