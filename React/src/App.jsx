import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/LoginPage'

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'
import About from './components/About'
import AllAppointments from './components/AllAppointments'
import Register from './components/Register'


function App() {


  return (
    <>
 
      <BrowserRouter>
        <div id='navDiv'>
          <nav>
            <NavLink to="/" activeclassname="active">Home</NavLink>
            <NavLink to="/about" activeclassname="active">About</NavLink>
            <NavLink to="/Login" activeclassname="active">Login</NavLink>
            <NavLink to="/sign up" activeclassname="active">Sign up</NavLink>
          </nav>
        </div>
        <div className="container">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/Login' element={<LoginPage />} />
            <Route path='/appointments' element={<AllAppointments />} />
           <Route path='/sign up' element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
