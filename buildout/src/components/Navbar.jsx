import React from 'react'
import { Stack,Box } from '@mui/material'
const Navbar = () => {
  return (
    <nav className=' container navbar navbar-expand-lg p-4 w-100'>
    <div className='container-fluid align-items-center'>
      {/* <div> */}
      <a className='navbar-brand text-white nav-item' href="#">Portfolio</a>
      <button 
      className='navbar-toggler' 
      type='button' 
      data-bs-toggle="collapse"
       data-bs-target="#navbarNav"
        aria-controls='navbarNav'
        aria-expanded="false"
         aria-label="Toggle navigation">
        <span className='navbar-toggler-icon'></span>
      </button>
      {/* </div> */}
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className='nav-item'><a className="nav-link  text-white" href='#'>Home</a></li>
        <li className='nav-item'><a className='nav-link  text-white' href="#">Experience</a></li>
        <li className='nav-item'><a className='nav-link  text-white' href="#">Skills</a></li>
        <li className='nav-item'><a className='nav-link text-white' href="#">Project</a></li>
        <li className='nav-item'><a className='nav-link text-white' href='#'>Contact</a></li>
      </ul>
      </div>
    </div>
    </nav>
  )
}

export default Navbar
