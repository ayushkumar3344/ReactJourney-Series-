import React from 'react'
import { useState } from 'react'
import User from './components/User'

const App = () => {

  const [display, setDisplay] = useState(true)

  return (
    <div>
      <h1>Hide and Show In React</h1>
      {
        display ? <User /> : <h1>Ghante ka Ayush </h1>
      }
      <button onClick={() => setDisplay(!display)}>Click</button>
    </div>
  )
}

export default App
