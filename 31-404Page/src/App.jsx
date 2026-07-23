import React from 'react'
import { Route, Routes, Link } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import PageNotFount from './pages/PageNotFount'

const App = () => {
  return (
    <div>

      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<PageNotFount />} />
      </Routes>

    </div>
  )
}

export default App
