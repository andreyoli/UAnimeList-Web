import React from 'react'
import Error from 'next/error'

import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import { AnimePageQuery } from '../../utils/graphqlQueries'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import {
  Container,
  AnimeBanner,
  AnimeCover,
  AnimeTitle,
  AnimeSubtitle,
  AnimeDescription,
  AnimeCoverContainer,
  PrimaryInfoContainer,
  CoverTitleContainer,
  TagContainer,
  LineTitle,
  InfoContainer
} from './styles'
import AnimeScore from '../../components/AnimeScore'
import Tag from '../../components/Tag'

const anime: React.FC = ({
  animeData
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isFallback } = useRouter()
  if (isFallback) {
    return <p>Carregando...</p>
  }
  // return <Error statusCode={404} />

  const animeInfo = animeData.Page.media[0]

  return (
    <>
      <Head>
        <title>{animeInfo.title.romaji} - UAnimeList</title>
      </Head>
      <Navbar />
      <Container>
        <AnimeBanner src={animeInfo.bannerImage} />
        <CoverTitleContainer>
          <AnimeCoverContainer>
            <AnimeCover src={animeInfo.coverImage.extraLarge} />
            <AnimeScore averageScore={animeInfo.averageScore} />
          </AnimeCoverContainer>
          <PrimaryInfoContainer>
            <AnimeTitle>{animeInfo.title.romaji}</AnimeTitle>
            <AnimeSubtitle>{animeInfo.title.english}</AnimeSubtitle>
            <AnimeDescription>
              {animeInfo.description.replace(/<[^>]*>?/gm, '')}
            </AnimeDescription>
            <TagContainer>
              {animeInfo.genres.map(genre => (
                <Tag color={animeInfo.coverImage.color} key={genre}>
                  {genre}
                </Tag>
              ))}
            </TagContainer>
          </PrimaryInfoContainer>
        </CoverTitleContainer>
        <LineTitle>
          <span>Information</span>
        </LineTitle>
        <InfoContainer>
          <p>
            <b>episodes:</b>
            {animeInfo.episodes}
          </p>
          <p>
            <b>studio:</b> {animeInfo.studios.edges[0].node.name}
          </p>
          <p>
            <b>source:</b> {animeInfo.source}
          </p>
          <p>
            <b>season:</b> {animeInfo.season}
          </p>
          <p>
            <b>year:</b> {animeInfo.seasonYear}
          </p>
          <p>
            <b>status:</b> {animeInfo.status}
          </p>
          <p>
            <b>format:</b> {animeInfo.format}
          </p>
        </InfoContainer>
      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const data: string = String(context.params.animeId)
  const animeData = await AnimePageQuery(data)

  return {
    props: {
      animeData
    },
    revalidate: 604800
  }
}

export default anime
