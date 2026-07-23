import React from 'react'
import { Link } from 'react-router'

const PageNotFound = () => {
  return (
    <div>
      <h1 className='text-3xl font-extrabold'>Sorry Page Not Found <span className='text-red-600'>Error404</span>.</h1>
      <h1
      className='text-center'
      ><Link to={"/"} className='underline text-blue-500 text-2xl' >Go to Home page</Link></h1>
      <img className=' ml-100 mt-20 w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxbGBkgu2IJdAqHYmyit3abaUG4K0wWx1auSMcpsLczHcdF33tLOP03JE&s=10" alt="EoorIMg" />
    </div>
  )
}

export default PageNotFound
