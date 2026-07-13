import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleCounter = () => {
       setCount(count + 1);
    }

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={handleCounter}>Update Counter</button>
    </div>
  )
}

export default Counter
