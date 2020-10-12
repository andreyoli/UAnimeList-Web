import React from 'react';

import { Button, Container, Input, SearchIcon } from './styles';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <Input type="search" placeholder="Search" />
      <Button><SearchIcon size="25px" /></Button>
    </Container>
  );
}

export default SearchBar;