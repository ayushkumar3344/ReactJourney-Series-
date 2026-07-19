import React from 'react'

const User = ({displayName, name, handleGold}) => {

  return (
    <div>
      <button
      onClick={() => displayName(name)}
      className='border border-red py-2 px-4 rounded bg-gray-900 cursor-pointer'
      >Display Name</button>
      <button
      onClick={() => handleGold()}
      className='border border-red py-2 px-4 rounded bg-gray-900 cursor-pointer'
      >Call</button>
    </div>
  )
}

export default User
