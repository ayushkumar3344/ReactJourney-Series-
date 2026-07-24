import React from 'react'
import { Link, Outlet } from 'react-router'

const Details = () => {
  return (
    <div className='h-[80vh] flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-extrabold'>Details Page</h1>
      <div className='text-blue-500 underline flex gap-x-3 mb-4'>
        <Link to={"book"} >Book Section</Link>
        <Link to={"info"} >Info Section</Link>
        <Link to={"vlog"} >Vlog Section</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Details
