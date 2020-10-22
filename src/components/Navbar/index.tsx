import React from 'react'
import LoginButton from '../LoginButton'
import SearchBar from '../SearchBar'

import { Nav, H3 } from './styles'

const Navbar: React.FC = () => {
  return (
    <Nav>
      <H3>UAnimeList</H3>
      <SearchBar />
      <LoginButton />
    </Nav>
  )
}

export default Navbar
