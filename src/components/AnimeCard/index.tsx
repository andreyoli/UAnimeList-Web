import React from 'react';

import { Container, AnimeImage, AnimeName } from './styles';

const AnimeCard: React.FC = () => {
  return(
    <Container>
      <AnimeImage src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx20-KCjCtnUTsLcu.jpg" />
      <AnimeName>Naruto</AnimeName>
    </Container>
  );
}

export default AnimeCard;