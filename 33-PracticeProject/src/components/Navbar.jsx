import React from 'react'
import {NavLink, Outlet } from 'react-router'

const Navbar = () => {
  return (
    <div>

      <div className='shadow-md flex px-10 py-5 items-center justify-between bg-purple-200'>
      <div>
        <h1 className='text-3xl font-extrabold'>Logo</h1>
      </div>
      <div>
        <ul className='flex gap-x-4'>
            <li>
                <NavLink to={"/"} >Home</NavLink>
            </li>
            <li>
                <NavLink to={"/in/user/about"} >About</NavLink>
            </li>
            <li>
                <NavLink to={"/in/user/contact"} >Contact</NavLink>
            </li>
            <li>
                <NavLink to={"/details"} >Details</NavLink>
            </li>
            <li>
                <NavLink to={"/users"} >Users</NavLink>
            </li>
            <li>
                <NavLink to={"/users/list"} >Lists</NavLink>
            </li>
        </ul>
      </div>
    </div>
    <Outlet />

    </div>
  )
}

export default Navbar
