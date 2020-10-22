import styled from 'styled-components'
import { IoIosList } from 'react-icons/io'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 120px 0 0 0;
  align-items: flex-start;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 0 30px 0;
`

export const ListIcon = styled(IoIosList)`
  color: ${props => props.theme.colors.secondary};
  margin: 0 5px 0 0;
`

export const H3 = styled.h3`
  text-transform: uppercase;
  font-weight: normal;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const AnimeList = styled.div`
  width: 100%;
  display: grid;
  justify-content: space-between;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-auto-rows: 350px;
  @media only screen and (max-width: 780px) {
    grid-auto-rows: 200px;
    grid-template-columns: repeat(auto-fit, 100px);
  }
`
