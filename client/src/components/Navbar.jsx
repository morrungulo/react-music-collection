import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/cds.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <div className='fixed w-full h-[95px] flex justify-between items-center px-9 text-gray-300'>

      <div className="flex justify-start items-center">
        {/* logo */}
        <div className="w-[110px]">
          <img src={Logo} alt='logo' />
        </div>

        {/* title */}
        <div className='hidden sm:block ml-3 text-3xl font-bold capitalize'>
          my music collection
        </div>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>Search</li>
        <li>Collection</li>
        <li>About</li>
      </ul>

      {/* hamburger */}
      <div onClick={() => setNav(val => !val)} className='md:hidden cursor-pointer z-10'>
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* mobile menu */}
      {nav ?
        <ul className='absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'>
          <li className='py-8 text-4xl'>Search</li>
          <li className='py-8 text-4xl'>Collection</li>
          <li className='py-8 text-4xl'>About</li>
        </ul>
        : null
      }

    </div >
  )
}

export default Navbar