//import { useState } from 'react'

//import './App.css'
import { ListadoApp } from './components/tasks/ListsTasts';
import { UsersApp } from './components/users/UsersApp';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <ListadoApp />
      <UsersApp/>
    </>
  )
}

export default App
