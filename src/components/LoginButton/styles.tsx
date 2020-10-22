import styled from 'styled-components'
import { BsFillPersonFill } from 'react-icons/bs'

export const Button = styled.button`
  min-width: 100px;
  min-height: 36px;
  background-color: transparent;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.textButton};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: bold;
  padding: 5px;
`

export const Person = styled(BsFillPersonFill)`
  color: ${props => props.theme.colors.primary};
  margin: 0 10px 0 0;
`
