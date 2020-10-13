import React from 'react';
import AnimeCard from '../AnimeCard';
import ViewMore from '../ViewMore';
import { Container, TitleContainer, FireIcon, H2, AnimesContainer } from './styles';

const Trending: React.FC = () => {
  return(
    <Container>
      <TitleContainer>
        <FireIcon size="3.5rem" title="Flame icon" />
        <H2>Trending This Season</H2>
      </TitleContainer>
      <AnimesContainer>
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
      </AnimesContainer>
      <ViewMore />
    </Container>
    );
  }

  export default Trending;