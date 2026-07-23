import React from 'react'
import { NavLink, Outlet } from 'react-router'

const College = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-extrabold">College Page</h1>
      <div className='flex gap-x-4 mt-3'>
        <NavLink to={"student"}>
          <h1 className="underline text-blue-500">Students</h1>
        </NavLink>
        <NavLink to={"department"}>
          <h1 className="underline text-blue-500">Departments</h1>
        </NavLink>
        <NavLink to={"details"}>
          <h1 className="underline text-blue-500">College Details</h1>
        </NavLink>
      </div>
      <Outlet/>
    </div>
  );
}

export default College
