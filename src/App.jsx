import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/home'
import About from './Pages/about'
import SignUp from './Pages/signUp'
import Contact from './Pages/contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about ' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App