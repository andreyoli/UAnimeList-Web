import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 120px 0 0 0;
  align-items: flex-start;
`

export const AnimeList = styled.div`
  width: 100%;
  display: grid;
  justify-content: flex-start;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-auto-rows: 350px;
  @media only screen and (max-width: 780px) {
    grid-auto-rows: 200px;
    grid-template-columns: repeat(auto-fit, 100px);
  }
`
