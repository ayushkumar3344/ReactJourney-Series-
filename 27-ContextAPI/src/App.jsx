import React, { useState } from 'react'
import College from './components/College'
import { SubjectContext } from './context/ContextData'

const App = () => {

  const [subject, setSubject] = useState('');

  return (
    <div className='m-10 bg-red-400 p-10'>

      <SubjectContext.Provider value={subject}>

        <select value={subject} onChange={(e) => setSubject(e.target.value)}  className='border border-white bg-gray-900 py-1 px-2 rounded cursor-pointer mb-10'>
          <option value="">Select Subject</option>
          <option value="Math">Math</option>
          <option value="English">English</option>
          <option value="SST">SST</option>
          <option value="History">History</option>
        </select>

        <button 
        onClick={(e) => setSubject('')}
        className='border border-white py-2 px-3 ml-5 bg-gray-700 cursor-pointer rounded hover:bg-gray-300 hover:text-black'>Reset Now</button>

        <h1 className='text-3xl font-extrabold mb-5' >Parent Component (Context API)</h1>
        <College />
      </SubjectContext.Provider>


    </div>
  )
}

export default App
