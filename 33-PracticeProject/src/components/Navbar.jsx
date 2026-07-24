import React from 'react'
import { Link, Outlet } from 'react-router'

const Navbar = () => {
  return (
    <div>

      <div className='shadow-md flex px-10 py-5 items-center justify-between bg-purple-200'>
      <div>
        <h1 className='text-3xl font-extrabold'>Logo</h1>
      </div>
      <div>
        <ul className='flex gap-x-4 '>
            <li>
                <Link to={"/"} >Home</Link>
            </li>
            <li>
                <Link to={"/in/user/about"} >About</Link>
            </li>
            <li>
                <Link to={"/in/user/contact"} >Contact</Link>
            </li>
            <li>
                <Link to={"/details"} >Details</Link>
            </li>
        </ul>
      </div>
    </div>
    <Outlet />

    </div>
  )
}

export default Navbar
