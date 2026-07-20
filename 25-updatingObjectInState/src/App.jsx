import React, { useState } from 'react'

const App = () => {

  const [data, setData] = useState({
    name : "Ayush Kumar",
    address: {
      city : "Palampur",
      country : "India"
    }
  })

  const handleName = (val) => {
    let tempData = data;
    tempData.name = val;
    setData({...tempData})
  }

  const handleCity = (city) => {
    data.address.city = city;
    setData({...data,address:{...data.address,city}})
  }

  return (
    <div>
      
      <h1>Updating Object In State : </h1>
      
      <input type="text" placeholder='Enter your name' onChange={(e) => handleName(e.target.value)} />
      <input type="text" placeholder='Update City' onChange={(e) => handleCity(e.target.value)} />

      <h1>Name : {data.name}</h1>
      <h1>City : {data.address.city}</h1>
      <h1>Country : {data.address.country}</h1>

    </div>
  )
}

export default App
