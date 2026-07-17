import React, { useEffect, useState } from 'react'

const App = () => {

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    // callOnce();
    handleCounter();
  }, [counter,data])

  const callOnce = () => {
    console.log("Button is Clicked");    
  }


  function handleCounter(){
    console.log("Counter Par Click Hua BHaiya", counter)
  }

  return (
    <div>
      <h1 className='text-3xl m-15 font-extrabold'>useEffect Hook :</h1>
      <h1 className='text-4xl font-extrabold ml-20'>{counter}</h1>
      <h1 className='text-4xl font-extrabold ml-60'>{data}</h1>
      <button 
      onClick={(e) => setCounter(counter + 1)}
      className='border border-red py-2 px-3 rounded m-10'
      >Counter {counter}</button>
      <button 
      onClick={(e) => setData(data + 1)}
      className='border border-red py-2 px-3 rounded m-10'
      >Data {data}</button>
    </div>
  )
}

export default App
