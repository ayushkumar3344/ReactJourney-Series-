import React from 'react'
import { createElement } from 'react'

const App = () => {

  const name = "Ayush Kumar";

  let a = 45;
  let x = 995;

  return (
    <div>
      <h1>Hello Brother : My Name is {name}</h1>
      <h1>{67 + 87}</h1>
      <h1>{a * x}</h1>
      <button onClick={() => alert("Click ho gya bhaiya")}>Click</button>
    </div>
  )

}

export default App
