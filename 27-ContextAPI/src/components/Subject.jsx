import React, { useContext } from 'react'
import { SubjectContext } from './ContextData'

const Subject = () => {

    const subject = useContext(SubjectContext);

  return (
    <div className='bg-emerald-500 p-10'>
      <h1 className='text-2xl'> Subject is : {subject}</h1>
    </div>
  )
}

export default Subject
