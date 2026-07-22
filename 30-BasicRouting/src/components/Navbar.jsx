import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='border border-black flex items-center justify-between py-3 px-10 bg-gray-800'>
      <div>
        <Link><h1 className='text-3xl font-extrabold text-white'>Logo</h1></Link>
      </div>
      <div>
        <ul className='flex gap-x-10 text-white underline'>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
