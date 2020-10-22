import styled from 'styled-components'
import { lighten } from 'polished'

export const InputGeneric = styled.input`
  width: 100%;
  padding: 5px 5px 5px 15px;
  height: 30px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: ${props => props.theme.colors.textLight};
  border: none;
  background: ${props => lighten(0.05, props.theme.colors.background)};
  ::placeholder {
    font-size: ${props => props.theme.fontSizes.text};
    color: ${props => props.theme.colors.subtitle};
  }
`
