// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import About from './Components/About'
import Companies_Logo from './Components/Companies_Logo'
import Features from './Components/Features'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Live_Video from './Components/Live_Video'
import Memories from './Components/Memories'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Memories/>
     <Features/>
     <Live_Video/>
     <Companies_Logo/>
     <Footer/>
    </>
  )
}

export default App
