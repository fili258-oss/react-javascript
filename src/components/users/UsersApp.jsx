import React, { useEffect, useState } from 'react'
import { UserList } from './UserList'

export const UsersApp = () => {
    /* useEffect(() => {
        fetchUsers()
    }, []) */
    const [endpoint, setendpoint] = useState('users')
    const handleFetch = () => {
        setendpoint('comments')
    }

  return (
    <>
    <h1>Lista de usuarios</h1>
    <UserList endopint={endpoint}></UserList>
    <button onClick={handleFetch}>Clic</button>
    </>
  )
}
