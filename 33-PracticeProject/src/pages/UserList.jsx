import React from 'react'
import { Link } from 'react-router'

const UserList = () => {

    const userData = [
        {id : 1,name : "Ayush Kumar",},
        {id : 2,name : "Aditi Sharma",},
        {id : 3,name : "Sourabh Rathi",},
        {id : 4,name : "Krishna",},
        {id : 5,name : "Gourav",},
    ]

  return (
    <div className='ml-10 mt-5'>
      <h1 className='text-3xl font-extrabold mb-10'>User List,Page</h1>
      {
        userData.map((item) => (
            <div>
                <h4 className='underline text-blue-700'><Link to={"/users/"+ item.id} >{item.name}</Link></h4>
                
            </div>
        ))
      }
    </div>
  )
}

export default UserList
