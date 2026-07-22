import React from 'react'
import { useState } from 'react';

const useCounter = (initialVal=100,step=2) => {

  const [count, setCount] = useState(initialVal);
  
    const handleIncrement = () => {
      setCount(count + step);
    }
  
    const handleDecrement = () => {
      setCount(count - step);
    }

 return {count,handleIncrement,handleDecrement}
}

export default useCounter
