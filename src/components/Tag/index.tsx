import React from 'react'

import { Container, GenreName } from './styles'

interface ITag {
  color: string
}

const Tag: React.FC<ITag> = ({ children, color }) => {
  return (
    <Container color={color}>
      <GenreName>{children}</GenreName>
    </Container>
  )
}

export default Tag
