import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-5xl'>
        {children}
      </div>
    </div>
  )
}

export default Container