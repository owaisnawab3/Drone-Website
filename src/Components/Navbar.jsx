import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
  <>
  <header>
    <div>
    <a href="#" className='logo'>Pro<span>One.</span></a>
    </div>
    <nav id='menu'
    className={`target-div ${isActive ? 'active' : ''}`}
    // style={{left: '0'}}
    >
    <ul className='nav-menu'>

        <li><a href="#home">&#10024; Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#product">Product</a></li>
        <li><a href="#blog" className='blog'>Blog</a></li>
        <li><a href="#get_started" className='btn'>Get Started</a></li>

    </ul>
    </nav>
    <div onClick={handleClick} className='toggle-link' id='toggle-btn'>
        <FontAwesomeIcon id="toggle" className='bar-icon' icon={faBarsStaggered} size="1.8xl"/>
    </div>
  </header>
  </>
  )
}

export default Navbar