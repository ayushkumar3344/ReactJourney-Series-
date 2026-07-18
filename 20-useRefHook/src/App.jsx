import React, { useRef } from 'react'

const App = () => {

  const inputRef = useRef(null);
  const h1Ref = useRef(null);

  const inputHandler = () => {
    inputRef.current.style.color="Red";
  }

  const toggleHandler = () => {
    
    if( inputRef.current.style.display!="none" ){
      inputRef.current.style.display="none"
    } else {
      inputRef.current.style.display="inline"
    }

  }

  const h1Handler = () => {
    h1Ref.current.style.fontSize="50px"
  }

  return (
    <div className='m-10'>
      
      <h1 className="text-3xl font-extrabold underline">
        UseRef Hook in React :
      </h1>

      <button 
      onClick={toggleHandler}
      className='border border-red bg-gray-800 mr-5 py-1 px-2 rounded cursor-pointer'
      >Toggle</button>

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

      <h1 ref={h1Ref}>Hello : Ayush</h1>
      <button 
      onClick={h1Handler}
      className='border border-red bg-gray-800 ml-5 py-1 px-2 rounded cursor-pointer'
      >Trget H1</button>


    </div>
  )
}

export default App
