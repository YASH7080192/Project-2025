import React from 'react'
import LoginForm from '../components/LoginFrom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Signin() {
  return (
    <div>
        <Navbar></Navbar>
        <LoginForm></LoginForm>
        <Footer></Footer>
    </div>
  )
}

export default Signin