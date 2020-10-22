import styled from 'styled-components'
import { IoIosFlame } from 'react-icons/io'
import { lighten } from 'polished'

export const Container = styled.div`
  margin: 120px 0 0 0;
  padding: 30px;
  background-color: ${props => lighten(0.05, props.theme.colors.background)};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 780px) {
    background-color: transparent;
    margin: 50px 0 0 0;
    padding: 0;
  }
`

export const AnimesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 30px 0 0 0;
  width: 100%;
  @media only screen and (max-width: 780px) {
    margin: 20px 0;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FireIcon = styled(IoIosFlame)`
  color: ${props => props.theme.colors.accent};
  margin: 0 5px 0 0;
  padding: 0;
`

export const H2 = styled.h2`
  text-transform: uppercase;
  font-weight: normal;
  margin: 0 2px 0 0;
  @media only screen and (max-width: 780px) {
    font-size: ${props => props.theme.fontSizes.titleSmall};
  }
`
