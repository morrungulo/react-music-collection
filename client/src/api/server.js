import axios from 'axios'

const server = axios.create({
  baseURL: 'http://localhost:4000/api',
  headers: {
    accept: 'application/json',
    prefer: 'return=representation'
  }
})

export const getAlbums = () => server({
  method: 'get',
  url: 'v1/music',
})
