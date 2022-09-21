import React from 'react'
import './styles/header.css'

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className="header-logo-wrapper">
        {/* <h2>Donald Thai</h2> */}
      </div>
      <nav className="header-nav-bar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/about">About Me</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header