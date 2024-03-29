import { NextPage } from 'next'
import React from 'react'
import { IData } from '../../utils/graphqlQueries'

import AnimeCard from '../AnimeCard'
import ViewMore from '../ViewMore'
import {
  Container,
  TitleContainer,
  FireIcon,
  H2,
  AnimesContainer
} from './styles'

interface ITrending {
  animeData: IData
}

const Trending: NextPage<ITrending> = ({ animeData }) => {
  const animes = animeData.Page.media

  return (
    <Container>
      <TitleContainer>
        <FireIcon size="3.5rem" title="Flame icon" />
        <H2>Trending This Season</H2>
      </TitleContainer>
      <AnimesContainer>
        {animes.map(anime => (
          <AnimeCard
            imageLink={anime.coverImage.extraLarge || anime.coverImage.color}
            AnimeName={anime.title.romaji}
            pagePath={anime.id}
            key={anime.id}
          />
        ))}
      </AnimesContainer>
      <ViewMore />
    </Container>
  )
}

export default Trending
