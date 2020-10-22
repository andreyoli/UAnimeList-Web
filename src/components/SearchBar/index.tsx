import React from 'react'
import Input from '../Input'

import { Button, Container, SearchIcon, FormStyled } from './styles'

const SearchBar: React.FC = () => {
  function handleSubmit(data) {
    // search animes
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Container>
        <Input name="search" />
        <Button type="submit">
          <SearchIcon size="25px" />
        </Button>
      </Container>
    </FormStyled>
  )
}

export default SearchBar
