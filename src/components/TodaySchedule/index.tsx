import { NextPage } from 'next'
import React from 'react'
import AnimeCard from '../AnimeCard'

import { Container, AnimeList } from './styles'
import { IAiringMedia } from '../../utils/graphqlQueries'

interface ITodaySchedule {
  animeData: [IAiringMedia]
}

const TodaySchedule: NextPage<ITodaySchedule> = ({ animeData }) => {
  const animes = animeData

  return (
    <Container>
      <AnimeList>
        {animes.map(anime => (
          <>
            <AnimeCard
              className="small"
              imageLink={anime.media.coverImage.large}
              AnimeName={anime.media.title.romaji}
              pagePath={anime.media.id}
              key={anime.media.id}
            />
            <p>
              {`Episode ${anime.episode} at ${new Date(
                anime.airingAt * 1000
              ).toLocaleDateString()}`}
            </p>
          </>
        ))}
      </AnimeList>
    </Container>
  )
}

export default TodaySchedule
