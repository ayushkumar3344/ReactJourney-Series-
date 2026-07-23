import React from 'react'
import { Route, Routes, Link } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import PageNotFound from './pages/PageNotFound'
import College from './pages/College'
import Student from './pages/Student'
import CollegeDetails from './pages/CollegeDetails'
import Department from './pages/Department'

const App = () => {
  return (
    <div>

      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/college' element={<College />}>
          <Route path='student' element={<Student />} />
          <Route path='department' element={<Department />} />
          <Route path='details' element={<CollegeDetails />} />
        </Route>
        <Route path='/*' element={<PageNotFound />} />
      </Routes>

    </div>
  )
}

export default App
