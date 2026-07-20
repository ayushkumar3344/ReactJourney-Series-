import React, { useState } from 'react'
import College from './components/College'
import Class from './components/Class'
import { SubjectContext } from './components/ContextData'

const App = () => {

  const [subject, setSubject] = useState();

  return (
    <div className='m-10 bg-red-400 p-10'>

      <SubjectContext.Provider value={subject}>
        <select value={subject} className='border border-white bg-gray-900 py-2 px-4' onChange={(e) => setSubject(e.target.value)}>
          <option value="">Select Option</option>
          <option value="hindi">Hindi</option>
          <option value="english">English</option>
          <option value="math">Math</option>
        </select>
        <button 
        className='border border-white bg-gray-900 text-white py-1 px-2 rounded ml-10'
        onClick={() => setSubject('')}
        >All Clear</button>
        <h1 className='text-3xl font-extrabold underline mb-5'>Context API in ReactJS :</h1>
        <College />
      </SubjectContext.Provider>
      
    </div>
  )
}

export default App
