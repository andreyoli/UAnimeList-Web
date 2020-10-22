import axios from 'axios'

const api = axios.create({
  baseURL: 'https://graphql.anilist.co'
})

export default api
