import './style.css'
import { useState } from 'react'
import Button from './Button'


const AddTask = ({handleTaskAddition}: any) => {
    const [inputData, setInputData] = useState('') 

    const handleInputChange = (e: any) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData("")
    }

    return (
        <div className="add-task-container">
            <input 
                onChange={handleInputChange}
                value={inputData}
                className='add-task-input' 
                type="text" 
            />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    )
}

export default AddTask