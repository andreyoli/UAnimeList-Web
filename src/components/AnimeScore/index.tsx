import React from 'react'

import { Container, Star, StarEmpety, StarHalf } from './styles'

interface IAnimeScore {
  averageScore: number
}

const AnimeScore: React.FC<IAnimeScore> = ({ averageScore }) => {
  function scoreToStar(score: number) {
    const items = []

    const scoreCalc = score / 10 / 2
    const scoreSplited = scoreCalc.toFixed(1).toString().split('.')

    for (let i = 0; i < parseInt(scoreSplited[0]); i++) {
      items.push(<Star size="30px" key={i} />)
    }

    if (parseInt(scoreSplited[1]) >= 5) {
      items.push(<StarHalf size="30px" key={0.5} />)
    }

    // if (parseInt(scoreSplited[1]) <= 5 && parseInt(scoreSplited[1]) > 0) {
    //   items.push(<StarHalf size="30px" key={0.5} />)
    // }

    for (let i = 5; items.length < 5; i++) {
      items.push(<StarEmpety size="30px" key={i} />)
    }

    return items
  }

  return <Container>{scoreToStar(averageScore)}</Container>
}

export default AnimeScore
