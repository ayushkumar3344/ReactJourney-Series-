import React from 'react'
import { Link, useParams } from 'react-router'

const UserDetails = () => {

    const paramsData = useParams();

  return (
    <div className='ml-10 mt-5'>
      <h1 className='text-3xl font-extrabold mb-10'>User Detail Page</h1>
      <h1 className='text-2xl font-serif mb-10'>User ID is : {paramsData.id}</h1>
      <button className='border border-black px-5 py-2 rounded bg-gray-900 text-white cursor-pointer hover:bg-gray-700'><Link to="/users" >Go To Home Page</Link></button>
    </div>
  )
}

export default UserDetails
