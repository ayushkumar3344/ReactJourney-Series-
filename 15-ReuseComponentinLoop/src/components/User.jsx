import React from 'react'

const User = ({user}) => {
    
  return (
    <div className='flex flex-col gap-y-1 m-6 p-6 rounded bg-gray-900'>
      <h1>Name : <span className='text-green-600 font-extrabold'>{user.name}</span></h1>
      <h1>Name : <span className='text-green-600 font-extrabold'>{user.course}</span></h1>
      <h1>Name : <span className='text-green-600 font-extrabold'>{user.emailID}</span></h1>
      <h1>Name : <span className='text-green-600 font-extrabold'>{user.contactNo}</span></h1>
    </div>
  )
}

export default User
