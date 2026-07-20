import React, { useState } from 'react'

const App = () => {

  const [data, setData] = useState([
    "Ayush","Shivam","Rohit"
  ])

  const handleUser = (name) => {
    data[data.length-1] = name;
    setData([...data])
  }

  return (
    <div>
      <h1>Updating Array In State.</h1>

      <input 
      onChange={(e) => handleUser(e.target.value)}
      placeholder='Enter last username'
      type="text" 
      />

      {
        data.map((item,index) => (
          <h1 key={index}>{item}</h1>
        ) )
      }
    </div>
  )
}

export default App
