import React from 'react'
import { Link, Outlet } from 'react-router'

const Details = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-extrabold'>Details Page</h1>
      <button className='border border-black px-5 py-2 my-10 rounded bg-gray-900 text-white cursor-pointer hover:bg-gray-700'><Link to="/" >Go To Home Page</Link></button>
      <div className='text-blue-500 underline flex gap-x-3 mb-4'>
        <Link to={""} >Book Section</Link>
        <Link to={"info"} >Info Section</Link>
        <Link to={"vlog"} >Vlog Section</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Details
