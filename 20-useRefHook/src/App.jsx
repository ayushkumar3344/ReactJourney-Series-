import React, { useRef } from 'react'

const App = () => {

  const inputRef = useRef(null);

  const inputHandler = () => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color="Red";
  }

  return (
    <div className='m-10'>
      
      <h1 className="text-3xl font-extrabold underline">
        UseRef Hook in React :
      </h1>

      <input 
      ref={inputRef}
      className='border border-red py-2 px-4 rounded mt-10'
      type="text" 
      placeholder='Enter user name...' 
      />

      <button 
      onClick={inputHandler}
      className='border border-red bg-gray-800 ml-5 py-1 px-2 rounded cursor-pointer'
      >Focus On Input Field</button>

    </div>
  )
}

export default App
