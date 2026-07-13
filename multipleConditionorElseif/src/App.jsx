import React, { useState } from 'react'


const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Multiple Condition Or Else If</h1>

      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>

      {
        count == 0 ? <h1>0 Par hai yar bhai Counter Abhi </h1> : 
        count == 1 ? <h1>Mubar ho Bhai count ki value 1 ho gyi</h1> :
        count == 2 ? <h1>Mubark 2 ho Gyi Yaa Hooo</h1> : 
        count == 3 ? <h1>Chao Finally 3 Hui </h1> : 
        <h1>Yeh Wala Numbe rtoh meri aukat ke bahar hai bhaiya</h1>
      }
      
    </div>
  )
}

export default App
