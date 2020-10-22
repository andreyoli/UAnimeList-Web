import { NextPage } from 'next'
import React from 'react'
import ViewMore from '../ViewMore'
import AnimeCard from '../AnimeCard'

import { Container, TitleContainer, AnimeList, H3, ListIcon } from './styles'
import { IData } from '../../utils/graphqlQueries'

interface IAllAnimes {
  animeData: IData
}

const AllAnimes: NextPage<IAllAnimes> = ({ animeData }) => {
  const animes = animeData.Page.media

  return (
    <Container>
      <TitleContainer>
        <H3>
          <ListIcon size="2.3rem" title="List icon" />
          ALL ANIMES
        </H3>
        <ViewMore />
      </TitleContainer>
      <AnimeList>
        {animes.map(anime => (
          <AnimeCard
            className="small"
            imageLink={anime.coverImage.extraLarge || anime.coverImage.color}
            AnimeName={anime.title.romaji}
            pagePath={anime.id}
            key={anime.id}
          />
        ))}
      </AnimeList>
    </Container>
  )
}

export default AllAnimes
