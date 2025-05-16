import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import signUp from './Pages/signUp'

const App = () => {
  return (
    <div>
      <Navbar />
      <signUp/>
      
      <Footer />
    </div>
  )
}

export default App