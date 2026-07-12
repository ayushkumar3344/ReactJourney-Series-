import React from 'react'

const App = () => {
  return (
    <div>
      <h1>First Component</h1>
      <Fruit />
      <Color />
      <h1>First Component</h1>
    </div>
  )
}

function Fruit(){
  return(
    <>
      <h2>Hello I am Fruit</h2>
    </>
  )
}

function Color(){
  return(
    <>
      <h1>Red Color</h1>
    </>
  )
}

export default App
