import React from 'react'
import useToggle from '../hooks/useToggle'

const Album = ({ album }) => {
  const { toggleAction, toggleValue } = useToggle(true)

  return (
    <div className="p-3 text-slate-300 bg-[#142846] border-none outline-none hover:scale-110 duration-300 ease-in-out rounded-lg">
      <div className="text-lg mt-2 font-semibold">
        {album.name}
      </div>
      <div className="text-base mt-2 font-semibold">
        {album.artist}
      </div>
      <div onClick={toggleAction} className="text-xs mt-2 font-light underline underline-offset-1 text-blue-500 hover:text-blue-600 cursor-pointer">
        {toggleValue ? 'Show song list' : 'Hide song list'}
      </div>
      {
        !toggleValue ? (
          <div className="grid gap-1 grid-cols-2 grid-flow-row-dense">
            {album.songs.map(song => (
              <div key={song._id} className='text-xs text-slate-500 font-thin'>
                {song.number} - {song.title}
              </div>
            ))}
          </div>
        ) :
          null
      }
    </div>
  )
}

export default Album