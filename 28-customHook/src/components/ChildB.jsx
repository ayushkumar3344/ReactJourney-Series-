import React from 'react'
import useCounter from '../hooks/useCounter'

const ChildB = () => {

    const {count,handleIncrement,handleDecrement}=useCounter()

  return (
    <div>
      <h1>Coust is : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decremnt</button>
    </div>
  )
}

export default ChildB
