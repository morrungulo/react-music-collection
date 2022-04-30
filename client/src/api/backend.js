import axios from 'axios'

const backend = () => axios.create({
  baseURL: 'http://localhost:4000/api',
  headers: {
    accept: 'application/json',
    prefer: 'return=representation'
  }
})

export const getAlbums = () => backend({
  method: 'get',
  url: 'v1/music'
})