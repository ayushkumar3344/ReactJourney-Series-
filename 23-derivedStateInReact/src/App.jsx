import React, { useState } from 'react'

const App = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');

  const handleAddUser = () => {
    setUsers([...users,user])
  }
 
  const total = users.length;
  const last = users[users.length-1];
  const unique = [...new Set(users)].length;
  
  return (
    <div className='m-10'>
      
      <h1 className='text-3xl font-extrabold underline mb-10'>Derived State in ReactJS :</h1>

      <h1 className='text-2xl font-mono mb-10'>Total User : {total}</h1>
      <h1 className='text-2xl font-mono mb-10'>Last User : {last}</h1>
      <h1 className='text-2xl font-mono mb-10'>Unique Last User : {unique}</h1>

      <div className='flex flex-col w-fit gap-y-1'>
        <input 
        onChange={(e) => setUser(e.target.value)}
        className='border border-red rounded py-2 px-3'
        type="text" 
        placeholder='add new user'
        />
        <button
        onClick={handleAddUser}
        className='border border-red py-1 px-2 bg-gray-900 cursor-pointer rounded'
        >Add User</button>
        {
          users.map((item, index) => (
            <h4 key={index}>{item}</h4>
          ))
        }
      </div>


    </div>
  )
}


export default App
