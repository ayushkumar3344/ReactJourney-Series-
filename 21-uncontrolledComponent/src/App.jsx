import React, { useRef } from 'react'

const App = () => {

  const userRef = useRef();
  const passRef = useRef();

  const handleForm = (e) => {
    e.preventDefault();
    
    let user = document.querySelector("#user").value
    let password = document.querySelector("#password").value
    console.log(user, password);
    
    
  }

  const handleFormRef = (e) => {
    e.preventDefault();

    const user = userRef.current.value;
    const password = passRef.current.value;
    console.log(user, password);

  }

  return (
    <div className="m-10">
      <h1 className="text-3xl font-extrabold underline">
        Uncontrolled Components in React Js :
      </h1>

      <form className='flex flex-col w-fit' onSubmit={handleForm}>

        <input 
        id='user'
        className='border border-red py-2 px-4 rounded mt-10 mb-5'
        placeholder='enter your username'
        type="text"
        />
        <input 
        id='password'
        className='border border-red py-2 px-4 rounded mb-5'
        placeholder='enter your password'
        type="text"
        />
        
        <button
        className='border border-red py-1 px-2 rounded bg-gray-900'
        >Submit</button>
        
      </form>

      <hr className='mt-10' />

      <form className='flex flex-col w-fit' onSubmit={handleFormRef}>

        <h1 className='text-2xl mt-5 underline'>UnControlled Component with UseRef</h1>

        <input 
        ref={userRef}
        id='userRef'
        className='border border-red py-2 px-4 rounded mt-10 mb-5'
        placeholder='enter your username'
        type="text"
        />
        <input 
        ref={passRef}
        id='passwordRef'
        className='border border-red py-2 px-4 rounded mb-5'
        placeholder='enter your password'
        type="text"
        />
        
        <button
        className='border border-red py-1 px-2 rounded bg-gray-900'
        >Submit with Ref</button>
        
      </form>

    </div>
  )
}

export default App
