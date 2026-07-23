import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex py-4 px-10 items-center justify-between bg-teal-500 text-white'>
      <div>
        <Link><h1 className='text-3xl font-extrabold'>Logo</h1></Link>
      </div>
      <div>
        <ul className='flex gap-x-4 text-[20px] underline'>
            <li>
                <Link to="/" >Home</Link>
            </li>
            <li>
                <Link to="/about" >About</Link>
            </li>
            <li>
                <Link to="/contact" >Contact</Link>
            </li>
            <li>
                <Link to="/college" >College</Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
