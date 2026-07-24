import React from 'react'
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div>
      <div className=' flex flex-col gap-y-3 items-center justify-center h-[80vh]'>
        <img
          className="rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvv8sMEL18fdVwCbvd4Gb5yF_DlLx6vFolyq6Afwf2wSKcHDFJXDqbSR76&s=10"
          alt="Error Image"
        />
        <button className='border border-black px-5 py-2 rounded bg-gray-900 text-white cursor-pointer hover:bg-gray-700'><Link to="/" >Go To Home Page</Link></button>
      </div>
    </div>
  );
}

export default ErrorPage
