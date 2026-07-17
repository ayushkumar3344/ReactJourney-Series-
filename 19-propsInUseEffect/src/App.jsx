import React, { useState } from 'react'
import Counter from './components/Counter'

const App = () => {

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  return (
    <div>
      <h1 className='text-3xl m-15 font-extrabold underline'>Handle props sideEffect with useEffect in Component :</h1>
      <Counter counter={counter} data={data} />
      <button 
      onClick={(e) => setCounter(counter + 1)}
      className='border border-red py-2 px-4 ml-15 mt-15 rounded bg-gray-900 cursor-pointer'
      >Counter </button>
      <button 
      onClick={(e) => setData(data + 1)}
      className='border border-red py-2 px-4 ml-15 mt-15 rounded bg-gray-900 cursor-pointer'
      >Data </button>
    </div>
  )
}

export default App
