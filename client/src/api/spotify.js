import axios from "axios"

const spotifyRapidApi = () => axios.create({
  baseURL: 'https://spotify23.p.rapidapi.com/',
  headers: {
    accept: 'application/json',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
    'X-RapidAPI-Key': '16e71b35demsh43f1a42157d7bddp193d0djsn6ea66b83053d'
  }
})

export const search = (q, limit = 5, topResults = 20) => spotifyRapidApi({
  method: 'get',
  url: 'search',
  params: {
    q,
    type: 'multi',
    offset: 0,
    limit: limit.toString(),
    numberOfTopResults: topResults.toString()
  }
})