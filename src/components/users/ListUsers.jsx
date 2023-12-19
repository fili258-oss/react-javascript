import React, { useState } from 'react'

export const ListUsers = () => {
    const [users, setUsers] = useState([])
    const fetchUsers = async() =>{
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = response.json();
            console.log(data);
            setUsers(data);

        } catch (error) {
            console.error(error)
        }
    }
  return (
    <>
    <h1>Lista de usuarios</h1>
    <ul><li></li></ul>
    </>
  )
}
