import { useState } from "react";

const Item = ({nombre, visto}) => {
    return(
        <li>{nombre}
        
        {visto ? ' OK' : ' F'}</li>
    )
}
export const ListadoApp = () => {
  const addTask = () =>{
    setArreglo([...arreglo, { nombre: 'Nuevo', visto: false}])
  }

  let listTasks = [
    {nombre:'Node js', visto: true},
    {nombre:'React js', visto: true},
    {nombre:'PHP js', visto: false},
    {nombre:'Java js', visto: true},
  ]

  const [arreglo, setArreglo] = useState(listTasks);
  return (
    <>
    <h1>Listado de temas del curso</h1>
    <ol>
        {arreglo.map(item => <Item key={item.nombre} nombre={item.nombre} visto={item.visto}></Item>)}        
    </ol>
    <button onClick={() => addTask()}>Agregar tarea</button>
    </>
  )
}
