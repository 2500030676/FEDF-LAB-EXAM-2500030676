//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Exam/Home'
import Registration from './exam/Registration'
import Users from './exam/Users'
import ApiDemo from './exam/ApiDemo'
import NavBar from './exam/NavBar'
import './exam/nav.css'
function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developerregister" element={<Registration />} />
          <Route path="/data" element={<Users />} />
          <Route path="/apidata" element={<ApiDemo />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
