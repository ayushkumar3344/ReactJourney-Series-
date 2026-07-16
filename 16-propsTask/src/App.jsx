import React from 'react'
import Clock from './Components/Clock'
import { useState } from 'react'

const App = () => {

  const [color, setColor] = useState("green");

  return (
    <div>
      <h1 style={{font:"14px",fontWeight:"700",fontFamily:"Poppins"}}>Digital Clock in React Js :</h1>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
        <option value="purple">Purple</option>
      </select>
      <Clock color={color} />
    </div>
  )
}

export default App
