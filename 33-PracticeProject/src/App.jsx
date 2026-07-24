import React from 'react'
import { Link, Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'
import Navbar from './components/Navbar'
import Details from './pages/Details'
import Book from './pages/Book'
import Info from './pages/Info'
import Vlog from './pages/Vlog'


const App = () => {
  return (
    <div>

      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/details' element={<Details />}>
          <Route path='book' element={<Book />} />
          <Route path='info' element={<Info />} />
          <Route path='vlog' element={<Vlog />} />
        </Route> 
        <Route path='/*' element={<ErrorPage />} />
      </Routes>


    </div>
  )
}

export default App
