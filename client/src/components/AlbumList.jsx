import React from 'react'
import Album from './Album'

const AlbumList = ({ albums }) => {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
      {
        albums.map(album => (
          <Album key={album._id} album={album} />
        ))
      }
    </div>
  )
}

export default AlbumList