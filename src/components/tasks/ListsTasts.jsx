import { useState } from "react";
import AddTasks from "./AddTasks";
const Item = ({nombre, visto}) => {
    return(
        <li>{nombre}
        
        {visto ? ' OK' : ' F'}</li>
    )
}
export const ListadoApp = () => {
  /* const addTask = () =>{
    setArreglo([...arreglo, { nombre: 'Nuevo', visto: false}])
  } */

  let listTasks = [
    { id: 1, nombre:'Node js', visto: true},
    { id: 2, nombre:'React js', visto: true},
    { id: 3, nombre:'PHP js', visto: false},
    { id: 4, nombre:'Java js', visto: true},
  ]

  const [arreglo, setArreglo] = useState(listTasks);
  const onAgregarTarea = (val) => {
    if (val < 1) return
    const envio = {
      nombre: val,
      visto: false
    }
    setArreglo([...arreglo, envio])
  }
  return (
    <>
    <h1>Listado de temas del curso</h1>
    <AddTasks agregarTarea={onAgregarTarea}/>
    <ol>
        {arreglo.map(item => <Item key={item.id} nombre={item.nombre} visto={item.visto}></Item>)}        
    </ol>
    {/* <button onClick={() => addTask()}>Agregar tarea</button> */}
    </>
  )
}
