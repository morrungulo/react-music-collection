import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div name="footer" className='w-full h-[105px] flex flex-col justify-end items-center text-gray-500'>

      {/* copyright */}
      <div className='text-sm text-center font-thin capitalize px-3 py-2'>
        Copyright &copy; 2022 Alexandre Lopes All Rights Reserved
      </div>

      <div className='flex justify-center items-center py-2'>
        <a href="https://www.linkedin.com/in/lopesalexandre/">
          <FaLinkedin size={26} />
        </a>
      </div>

    </div >
  )
}

export default Footer