import styled from 'styled-components'

export const Container = styled.div`
  min-height: 16px;
  width: fit-content;
  margin: 20px 0 0 0;
  padding: 1px 6px;
  border-radius: 5px;
  background-color: ${props => props.color};
  filter: drop-shadow(2px 2px 4px ${props => props.theme.colors.shadow});
`

export const GenreName = styled.p`
  color: ${props => props.theme.colors.textDark};
  font-size: ${props => props.theme.fontSizes.text};
`
