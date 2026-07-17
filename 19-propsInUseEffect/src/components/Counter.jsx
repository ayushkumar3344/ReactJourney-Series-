import React, { useEffect } from 'react'

const Counter = ({counter,data}) => {

    const handleCounter = () => {
        console.log("handleCounter Function Called");
    }

    const handleData = () => {
        console.log("HandledData Function Called")
    }

    useEffect(() => {
        handleCounter();
    },[counter])

    useEffect(() => {
        handleData();
    },[data])

  return (
    <div>
      <h1 className='ml-15'>counter Componenet : {counter}</h1>
      <h1 className='ml-15'>Data Componenet : {data}</h1>
    </div>
  )
}

export default Counter
