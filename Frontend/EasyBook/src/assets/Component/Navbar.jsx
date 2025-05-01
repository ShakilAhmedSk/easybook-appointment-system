import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {FiLogIn,FiUserPlus} from 'react-icons/fi'

function Navbar() {
    const [menuOpen, setMenuOpen]=useState(false);
  return (

    <>

          <div className="fixed top-0 left-0 right-0 flex flex-row justify-between px-4 py-2 bg-slate-300 h-16 items-center z-10">
          {/* Logo */}
          <div>
            <h1 className='font-montserrat text-3xl font-bold text-red-500'>EasyBook</h1>
          </div>
          {/* Hamburger For Mobile */}
          <button className="lg:hidden text-4xl text-gray-500 hover:text-blue-500 "
            onClick={()=>setMenuOpen(!menuOpen)}
          >☰</button>
          {/* Navbar Section */}
          <div className='hidden  lg:flex flex-row gap-9 items-center'>
            <nav>
              <ul className='flex flex-row gap-8 items-center'>
                <li>
                  <NavLink to="/" className="text-xl hover:text-blue-500 transition-colors duration-300">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/About" className="text-xl hover:text-blue-500 transition-colors duration-300">About</NavLink>
                </li>
                <li>
                  <NavLink to="/Services" className="text-xl hover:text-blue-500 transition-colors duration-300">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/Contact" className="text-xl hover:text-blue-500 transition-colors duration-300">Contact</NavLink>
                </li>
              </ul>
            </nav>

            {/* Buttons for Login & Register */}
            <div className='flex flex-row gap-3 items-center'>
            <button className="flex items-center gap-2 text-lg text-gray-800 hover:text-blue-700 px-4 py-2 rounded transition-colors duration-300">
            <FiLogIn className="w-5 h-5" />
              Login
            </button>
            <button className="text-lg bg-blue-500 text-white px-4 py-1 rounded-3xl flex flex-row items-center gap-2">
              <FiUserPlus className='w-5 h-5'/>
              Register</button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className=" z-50 fixed top-16 right-0 flex flex-col items-center gap-3 lg:hidden float-end bg-slate-200 w-1/2  py-4">
            <NavLink to="/" onClick={()=>setMenuOpen(!menuOpen)} className="text-lg hover:text-blue-500 ">Home</NavLink>
            <NavLink to="/About" onClick={()=>setMenuOpen(!menuOpen)} className="text-lg hover:text-blue-500">About</NavLink>
            <NavLink to="/Services" onClick={()=>setMenuOpen(!menuOpen)} className="text-lg hover:text-blue-500">Services</NavLink>
            <NavLink to="/Contact" onClick={()=>setMenuOpen(!menuOpen)} className="text-lg hover:text-blue-500">Contact</NavLink>
            <div className="flex flex-col gap-2">
              <button className=" text-lg text-gray-600 px-4 py-1 rounded-lg flex flex-row items-center gap-1">
              <FiLogIn className="w-5 h-5" />
              Login</button>
              <button className="text-lg bg-blue-500 text-white px-4 py-1 rounded-3xl flex flex-row items-center gap-2">
              <FiUserPlus className='w-5 h-5'/>
              Register</button>
            </div>
          </div>
        )}


        </>

  )
}

export default Navbar
