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
    query: `#graphql
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
    query: `#graphql
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

export const AnimePageQuery = async (animeId: string): Promise<any> => {
  const variables = {
    id: animeId
  }

  const res = await api.post('/', {
    query: `#graphql
      query ($id: Int) {
        Page (page: 1, perPage: 1) {
          media (id: $id){
            bannerImage
            coverImage {
              extraLarge
              color
            }
            averageScore
            title {
              romaji
              english
            }
            description(asHtml: false)
            genres
            # Informations
            episodes
            studios(isMain: true) {
              edges {
                node{
                  name
                }
              }
            }
            source
            seasonYear
            status
            format
            season
            # Trailer
            trailer {
              id
              site
              thumbnail
            }
            # Associated
            relations {
              edges{
                node{
                  format
                  title{
                    romaji
                  }
                  coverImage{
                    extraLarge
                    color
                  }
                }
              }
            }
            # Staff
            staff(sort: FAVOURITES_DESC) {
              edges {
                role
                node{
                  name {
                    first
                    last
                    full
                    native
                  }
                  image {
                    large
                    medium
                  }
                }
              }
            }
            # Characters
            characters(sort: ROLE) {
              edges{
                role
                node {
                  name {
                    first
                    last
                    full
                    native
                  }
                  image {
                    large
                    medium
                  }
                }
              }
            }
            # Recommendations
            recommendations {
              nodes{
                mediaRecommendation{
                  title{
                    romaji
                  }
                  coverImage{
                    extraLarge
                    color
                  }
                }
              }
            }
            
          }
        } 
      }
    `,
    variables
  })

  const data = res.data.data
  return data
}
