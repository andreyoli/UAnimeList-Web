import api from '../services/api'
import selectCurrentSeason from '../utils/selectCurrentSeason'

export interface IData {
  Page: {
    media: [
      {
        coverImage: {
          color: string
          extraLarge: string
        }
        id: number
        title: {
          english: string
          romaji: string
        }
      }
    ]
  }
}

export const TrendingQuery = async (nPerPage: number): Promise<IData> => {
  const variables = {
    perPage: nPerPage,
    season: selectCurrentSeason(),
    seasonYear: new Date().getFullYear()
  }

  const res = await api.post('/', {
    query: `
    query ($perPage: Int, $season: MediaSeason, $seasonYear: Int) {
          Page (page: 1, perPage: $perPage) {
            media (type: ANIME, isAdult: false, sort: POPULARITY_DESC, season: $season, seasonYear: $seasonYear) {
              id
              title {
                romaji
                english
              }
              coverImage {
                extraLarge
                color
              }
            }
         } 
        }`,
    variables
  })
  const data = res.data.data
  return data
}

export const AllAnimesQuery = async (nPerPage: number): Promise<IData> => {
  const variables = {
    perPage: nPerPage
  }

  const res = await api.post('/', {
    query: `
    query ($perPage: Int) {
          Page (page: 1, perPage: $perPage) {
            media (type: ANIME, isAdult: false, sort: POPULARITY_DESC) {
              id
              title {
                romaji
                english
              }
              coverImage {
                extraLarge
                color
              }
            }
         } 
        }`,
    variables
  })

  const data = res.data.data
  return data
}
