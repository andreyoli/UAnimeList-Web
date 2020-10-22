import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { Container, AnimeImage, AnimeName } from './styles'

interface IAnimeCard {
  className?: string
  imageLink: string
  AnimeName: string
  pagePath?: number
}

const AnimeCard: NextPage<IAnimeCard> = props => {
  const animePath = `/anime/${props.pagePath}`

  return (
    <Link href={animePath}>
      <Container>
        <AnimeImage src={props.imageLink} className={props.className} />
        <AnimeName title={props.AnimeName}>{props.AnimeName}</AnimeName>
      </Container>
    </Link>
  )
}

export default AnimeCard
