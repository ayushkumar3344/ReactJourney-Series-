import React from 'react'

const App = () => {

  const fruit = () => {
    alert("Fruit Name is Bnana")
  }

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <button onClick={fruit}>Click For Fruit</button>
    </div>
  )

}

export default App
