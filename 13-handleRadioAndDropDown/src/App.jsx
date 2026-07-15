import React, { useState } from 'react'

const App = () => {

  const [gender, setGender] = useState("Female");
  const [city, setCity] = useState("Delhi");

  return (
    <div>

      <h1>Handle Radio Button And DropDown</h1>

      <h1 className='text-3xl mt-10 mb-4'>Select Gender</h1>
      {/* ---> */}
      <input className='ml-5' onChange={(e) => setGender(e.target.value)} type="radio" value={"Male"} name="gender" checked={gender == 'Male'} id="male" /> 
      <label htmlFor="male">Male</label>
      {/* ---> */}
      <input className='ml-5' onChange={(e) => setGender(e.target.value)} type="radio" value={"Female"} name="gender" checked={gender == 'Female'} id="female" />
      <label htmlFor="female">Female</label>

      <h2 className='mt-4 border border-red-600 w-fit py-2 px-5 ml-5'>Selected Gender : {gender}</h2>


      <div className='border border-purple-500 w-fit p-6 ml-5 mt-5 rounded'>

        <h1 className='text-3xl font-extrabold'>Select City :</h1>

        <select  onChange={(e) => setCity(e.target.value)} className='border border-white mt-4' defaultValue={"Delhi"}>
          <option value="Noida">Noida</option>
          <option value="Hyderabaad">Hyderabaad</option>
          <option value="Delhi">Delhi</option>
        </select>

        <h1 className='mt-5 border px-2 py-1'>Selected City : {city}</h1>

      </div>
      
    </div>
  )
}

export default App
