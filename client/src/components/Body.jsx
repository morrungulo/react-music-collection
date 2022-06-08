import React, { useCallback, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { getAlbums } from '../api/server'
import useApi from '../hooks/useApi'
import AlbumList from './AlbumList'

const Body = () => {
  const [search, setSearch] = useState('')
  const { data, loading, error } = useApi(useCallback(() => getAlbums(), []))
  const [filteredData, setFilteredData] = useState([])

  const handleSearch = (e) => {
    const searchTerm = e.target.value
    setSearch(searchTerm)
    if (searchTerm !== '' && data != null) {
      const newFilteredData = data.data.filter(album => {
        const songTitles = album.songs.map(song => song.title)
        return [album.name, album.artist, ...songTitles]
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      })
      setFilteredData(newFilteredData)
    } else {
      setFilteredData(data.data)
    }
  }

  return (
    <div className='max-w-[1000px] w-full flex flex-col justify-start items-center flex-grow mt-[150px] mb-auto mx-auto px-4 sm:px-8 box-border'>

      {/* search */}
      <div className="w-[100%] sm:w-[90%] md:w-[85%] lg:w-[75%] flex justify-center items-center px-2 text-gray-200 bg-[#142846] rounded-full">
        <FaSearch />
        <input
          value={search}
          disabled={loading}
          onChange={handleSearch}
          placeholder='Search...'
          className='flex-1 px-3 py-3 bg-transparent text-base outline-none border-none'
          type="text" />
      </div>

      {/* loading */}
      {loading ?
        <div className='mt-6 text-gray-400 text-xl'>
          Loading...
        </div>
        :
        null}

      {/* error */}
      {error !== null ?
        <div className='mt-6 text-gray-400 text-xl'>
          Error loading data!
        </div>
        :
        null}

      {/* collection */}
      {data !== null ?
        <AlbumList albums={search === '' ? data.data : filteredData} />
        :
        null}

    </div >
  )
}

export default Body