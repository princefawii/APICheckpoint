import React from 'react'
import axios from "axios"
import {useState, useEffect} from "react"

function UserList() {
  const [listOfUser, setListOfUser] = useState([]);
useEffect(()=>{ axios.get("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.data)
.then(data=>setListOfUser([...data]))
}, [])
 return (
    <div>
      <h1>List of users</h1>
      <ul className='list'>  
      {listOfUser.map((user)=>(
        <li>
          <h1>Name:{user.name}</h1>
          <p>Username:{user.username}</p>
          <p>Email:{user.email}</p>
          <p>Street:{user.address.street}</p>
          <p>Suite:{user.address.suite}</p>
          <p>City:{user.address.city}</p>
          <p>Zipcode:{user.address.zipcode}</p>
          <p>Street address:{user.address.geo.lat}</p>
        </li>
))}
        </ul>
    </div>
  )
}

export default UserList
