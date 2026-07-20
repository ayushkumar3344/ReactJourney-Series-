import React from 'react'
import AddUser from './components/AddUser'
import DisplayUser from './components/DisplayUser'
import { useState } from 'react'

const App = () => {

  const [user, setUser] = useState('');

  return (
    <div>
      
      <h1>Lifting state up in React.</h1>
      
      <AddUser setUser={setUser} />
      <DisplayUser user={user} />

    </div>
  )
}

export default App
