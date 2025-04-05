import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/contact'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <center>
    <Router>
      <Routes>
       
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
    </Routes>
    </Router>
    </center>
  )
}

export default App
