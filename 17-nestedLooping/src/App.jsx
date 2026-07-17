import React from 'react'
import College from './components/College'

const App = () => {

  const collegeData = [
    {
      name : "IIT Rudki",
      city : "jaipur",
      website : "www.iet.com",
      student : [
        {
          name : "Ayush Kumar",
          age : 22,
          emailID : "kumarayush8117@gmail.com"
        },
        {
          name : "Goutam Raj",
          age : 25,
          emailID : "goutamraj8117@gmail.com"
        },
        {
          name : "Shivam Dube",
          age : 27,
          emailID : "dubeshivam@gmail.com"
        },
        {
          name : "Rohini Yadav",
          age : 24,
          emailID : "rohiniyadav@gmail.com"
        },
      ]
    },
    {
      name : "IIT Mandi",
      city : "Mandi",
      website : "www.ietmandi.com",
      student : [
        {
          name : "Ayush Kumar",
          age : 22,
          emailID : "kumarayush8117@gmail.com"
        },
        {
          name : "Goutam Raj",
          age : 25,
          emailID : "goutamraj8117@gmail.com"
        },
        {
          name : "Shivam Dube",
          age : 27,
          emailID : "dubeshivam@gmail.com"
        },
        {
          name : "Rohini Yadav",
          age : 24,
          emailID : "rohiniyadav@gmail.com"
        },
      ]
    },
    {
      name : "NIT",
      city : "Hyderabaad",
      website : "www.iethyderabad.com",
      student : [
        {
          name : "Ayush Kumar",
          age : 22,
          emailID : "kumarayush8117@gmail.com"
        },
        {
          name : "Goutam Raj",
          age : 25,
          emailID : "goutamraj8117@gmail.com"
        },
        {
          name : "Shivam Dube",
          age : 27,
          emailID : "dubeshivam@gmail.com"
        },
        {
          name : "Rohini Yadav",
          age : 24,
          emailID : "rohiniyadav@gmail.com"
        },
      ]
    },
    {
      name : "IIT Bombay",
      city : "Bombay",
      website : "www.ietbombayhub.com",
      student : [
        {
          name : "Ayush Kumar",
          age : 22,
          emailID : "kumarayush8117@gmail.com"
        },
        {
          name : "Goutam Raj",
          age : 25,
          emailID : "goutamraj8117@gmail.com"
        },
        {
          name : "Shivam Dube",
          age : 27,
          emailID : "dubeshivam@gmail.com"
        },
        {
          name : "Rohini Yadav",
          age : 24,
          emailID : "rohiniyadav@gmail.com"
        },
      ]
    },
  ]

  return (
    <div>
      <h1 className='text-3xl font-extrabold m-10'>Array Nested Looping with Components :</h1>
      {
        collegeData.map((college, index) => (
          <div key={index} className='border border-red flex flex-col gap-y-2 m-5 p-10 bg-gray-900 rounded'>
            <College college={college} />
          </div>
        ))
      }
    </div>
  )
}

export default App
