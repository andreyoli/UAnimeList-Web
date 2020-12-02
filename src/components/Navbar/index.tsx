import React from 'react'
import LoginButton from '../LoginButton'
import SearchBar from '../SearchBar'
import Link from 'next/link'

import { Nav, H3 } from './styles'

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Link href="/">
        <H3>UAnimeList</H3>
      </Link>
      <SearchBar />
      <LoginButton />
    </Nav>
  )
}

export default Navbar
