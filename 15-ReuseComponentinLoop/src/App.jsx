import React from 'react'
import User from './components/User'

const App = () => {

  const userData = [
    {
      name : "Ayush Kumar",
      emailID : "kumarayush8117@gmail.com",
      course : "MCA",
      contactNo : 8091077739
    },
    {
      name : "Sakshi Chouhan",
      emailID : "sakshichouhan8117@gmail.com",
      course : "M.tech",
      contactNo : 8091893405
    },
    {
      name : "Sourav Yadav",
      emailID : "sourav998@gmail.com",
      course : "BA",
      contactNo : 7834503458
    },
    {
      name : "Keshari Lal Yadav",
      emailID : "kesari084@gmail.com",
      course : "MBA",
      contactNo : 9347534756
    },
  ]

  return (
    <div>

      <h1 className='text-3xl font-extrabold m-10'>Reuse Component in Loop : </h1>
      
      {
        userData.map((user) => (
          <div>
            <User user={user} />
          </div>
        ))
      }

    </div>
  )

}

export default App
