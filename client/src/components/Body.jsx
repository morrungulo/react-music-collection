import React, { useEffect, useState } from 'react'
import * as backend from '../api/backend'
import useApi from '../hooks/useApi'

const Body = () => {
  const { data, loading, error } = useApi(() => backend.getAlbums())

  return (
    <div className='max-w-[1000px] mt-[250px] mb-auto'>

      {
        loading && <
      }

      {/* title */}
      {
       !loading && data !== null ? 
       :
      
      }
      <ul>
        {}
      </ul>

    </div>
  )
}

export default Body