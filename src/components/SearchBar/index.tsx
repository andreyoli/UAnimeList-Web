import React from 'react';

import { Button, Container, Input, SearchIcon } from './styles';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <Input type="search" placeholder="Search anime or manga name" />
      <Button><SearchIcon size="25px" /></Button>
    </Container>
  );
}

export default SearchBar;