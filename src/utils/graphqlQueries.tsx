import api from '../services/api'
import selectCurrentSeason from '../utils/selectCurrentSeason'

export interface IAiringMedia {
  media: {
    id: number
    title: {
      romaji: string
    }
    coverImage: {
      large: string
    }
    mediaListEntry: {
      progress: number
    }
    episodes: number
  }
  episode: number
  airingAt: number
}

export interface IAiringSchedules {
  airingSchedules: [IAiringMedia]
}

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

export const GetTodaySchedule = async (
  mediaIdList: number[]
): Promise<IAiringSchedules> => {
  const event = new Date()
  event.setHours(0, 0, 0, 0)

  const todayEpoch = event.getTime() / 1000.0
  event.setDate(event.getDate() + 7)
  const tomorrowEpoch = event.getTime() / 1000.0

  const variables = {
    mediaIdList,
    todayEpoch,
    tomorrowEpoch
  }

  const res = await api.post('/', {
    query: `#graphql
      query($mediaIdList: [Int], $todayEpoch: Int, $tomorrowEpoch: Int) {
        Page(perPage: 100) {
            pageInfo {
                hasNextPage
            }
            airingSchedules(sort: TIME, airingAt_greater: $todayEpoch, airingAt_lesser: $tomorrowEpoch, mediaId_in: $mediaIdList) {
                media {
                    id
                    title {
                        romaji
                    }
                    coverImage {
                        large
                    }
                    mediaListEntry {
                        progress
                    }   
                    episodes
                }
                episode
                airingAt
            }
        }
      }`,
    variables
  })

  const data = res.data.data.Page.airingSchedules
  return data
}
