import React, { useContext } from 'react'
import { SubjectContext } from '../context/ContextData'


const Subject = () => {

    const subject = useContext(SubjectContext)

  return (
    <div className='bg-black p-10' >
      <h1 className='text-2xl mb-5'>Subject is : {subject}</h1>
    </div>
  )
}

export default Subject
