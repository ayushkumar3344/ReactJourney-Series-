import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (

    <div>
      <h1>Controlled Component In React.</h1>
      <form action="#">
        <input 
        type="text" 
        value={name}
        placeholder='Enter your name'
        onChange={(e) => {setName(e.target.value)}}
        />
        <br /><br />
        <input 
        type="text" 
        value={password}
        placeholder='Enter your password'
        onChange={(e) => {setPassword(e.target.value)}}
        />
        <br /><br />
        <input 
        type="text" 
        value={email}
        placeholder='Enter your email'
        onChange={(e) => {setEmail(e.target.value)}}
        />
        <br /><br />
        <button onClick={() => {
          setName("")
          setPassword("")
          setEmail("")
        }}>Clear</button>
        <br /><br />

        {name}<br/>
        {password}<br/>
        {email}
      </form>
    </div>
  )
}

export default App
