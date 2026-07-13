import React, { useState } from 'react'
import Counter from './components/Counter';

const App = () => {

  const [fruit, setFruit] = useState("Mango");

  const handleFruit = () => {
    setFruit("Apple")
  }

  return (
    <div>
      <h1>State In React Js</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruit}>Change Fruit Name</button>
      <Counter />
    </div>
  )
}

export default App
