import React from 'react'
import useCounter from '../hooks/useCounter'

const ChildA = () => {

    const {count,handleIncrement,handleDecrement}=useCounter(1000,100)

  return (
    <div>
      <h1>Coust is : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decremnt</button>
    </div>
  )
}

export default ChildA
