import React from 'react'
import UserComponent, { Profile, Setting } from './components/UserComponent'
import Login from './components/UserComponent'

const App = () => {
  return (
    <div>
      <Login />
      <Profile />
      <Setting />
      <h1>Class 2</h1>
    </div>
  )
}

export default App
