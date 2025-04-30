import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
            <div className='flex flex-row justify-between px-4 py-2 bg-slate-200 h-16 items-center'>
          {/* Logo */}
          <div>
            <h1 className='font-montserrat text-3xl font-bold text-red-500'>EasyBook</h1>
          </div>
        
          {/* Navbar Section */}
          <div className='flex flex-row gap-9 items-center'>
            <nav>
              <ul className='flex flex-row gap-8 items-center'>
                <li>
                  <NavLink to="/" className="text-xl hover:text-blue-500 transition-colors duration-300">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/Services" className="text-xl hover:text-blue-500 transition-colors duration-300">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/About" className="text-xl hover:text-blue-500 transition-colors duration-300">About</NavLink>
                </li>
                <li>
                  <NavLink to="/Contact" className="text-xl hover:text-blue-500 transition-colors duration-300">Contact</NavLink>
                </li>
              </ul>
            </nav>
        
            {/* Buttons for Login & Register */}
            <div className='flex flex-row gap-3 items-center'>
              <button className="text-xl bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded transition-colors duration-300">Login</button>
              <button className="text-xl bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded transition-colors duration-300">Register</button>
            </div>
          </div>
        </div>

  )
}

export default Navbar
