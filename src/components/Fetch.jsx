import React, { useState, useEffect } from 'react'

const Fetch = () => {
    const [users, setUsers] = useState([])

    const dataFetch = async () => {
        const apiUrl = await fetch("https://jsonplaceholder.typicode.com/users")
        const result = await apiUrl.json()
        setUsers(result)
    }

    useEffect(() => {
        dataFetch()
    }, [])
    const render = users.map ((user, idx) => {
        return(
            <div key = {idx}>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                Address: {user.address.suite} {user.address.street} {user.address.city} <br/>  <br/>  
            </div>
        )
    })
  return (
    <div className='fetch-container'>
<div>
<h2 className='fetch-heading'>We have {users.length} users data</h2>
      {render}
      </div>
    </div>
  )
}

export default Fetch

