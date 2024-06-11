import React from 'react'
import logo from '../assets/delegateMateBlack.png'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <img
      src={logo}
      alt='logo'
      style={{height: "50px"}}
      className='logo'
      />
      <Link to="/">
        <button className='navbar-button'>About</button>
      </Link>
      <Link to="/terms">
        <button className='navbar-button'>Terms</button>
      </Link>
      <Link to="/open-request">
        <button className='navbar-button'>Account</button>
      </Link>
    </nav>
  )
}

export default NavBar


// comment here
