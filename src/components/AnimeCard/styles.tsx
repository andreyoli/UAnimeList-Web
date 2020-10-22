import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  :hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 780px) {
    margin: 0 20px 0 0;
    margin: 0;
  }
`

export const AnimeImage = styled.img`
  object-fit: cover;
  border-radius: 5px;
  @media only screen and (max-width: 1000px) {
    width: 100px;
    height: 144px;
  }
  width: ${props => (props.className === 'small' ? '180px' : '270px')};
  height: ${props => (props.className === 'small' ? '250px' : '375px')};
`

export const AnimeName = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.text};
  margin: 30px 0 40px 0;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: ${props => (props.className === 'small' ? '80px' : '170px')};
  @media only screen and (max-width: 780px) {
    margin: 0 0 0 0;
    width: 80px;
  }
`
