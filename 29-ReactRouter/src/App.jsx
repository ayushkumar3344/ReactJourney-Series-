import React from 'react'
import { Route, Routes, Link } from 'react-router'
import Home from './routers/Home'
import About from './routers/About'
import Contact from './routers/Contact'


const App = () => {
  return (
    <>

      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to={"/contact"} >Contact</Link>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
