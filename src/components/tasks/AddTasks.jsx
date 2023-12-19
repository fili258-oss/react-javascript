
import { useState } from "react";

const AddTasks = ({agregarTarea}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = (event) => {
        setInputValue(event.target.value)
        
    }

    const onSubmit = (event) => {        
        event.preventDefault();
        agregarTarea(inputValue)
    }

  return (
    <div>
      <h2>Agegar tarea</h2>
      <form onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder="Ingrese un tarea"
            value={inputValue}
            onChange={onInputChange} />
      </form>
        
    </div>
  )
}

export default AddTasks
