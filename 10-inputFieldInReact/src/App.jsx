import React, { useState } from 'react'

const App = () => {

  const [data, setData] = useState();

  return (
    <div>

      <h1>How React use in our Input Field.</h1>

      <input 
      type="text" 
      placeholder='enter your name here..' 
      value={data}
      onChange={(e) => setData(e.target.value)}
      />
      <h1>{data}</h1>
      <button 
      onClick={() => {
        setData("");
      }}
      >Reset Data</button>
    </div>
  )
}

export default App
