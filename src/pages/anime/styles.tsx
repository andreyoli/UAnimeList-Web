import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AnimeBanner = styled.img`
  width: 100vw;
  height: 400px;
  margin: 30px -76px;
  margin-bottom: 0;
  padding: 0;
  object-fit: cover;
  @media only screen and (max-width: 780px) {
    /* margin: 22px -25px; */
    display: none;
  }
`
export const AnimeCover = styled.img`
  width: 202px;
  height: 302px;
  object-fit: cover;
  margin: -76px 0 0 0;
  filter: drop-shadow(4px 4px 4px ${props => props.theme.colors.shadow});
  @media only screen and (max-width: 780px) {
    margin: 30px 0 0 0;
    width: 180px;
    height: 269px;
  }
`

export const AnimeCoverContainer = styled.div`
  width: 202px;
`

export const AnimeTitle = styled.h1`
  color: ${props => props.theme.colors.textLight};
  @media only screen and (max-width: 780px) {
    font-size: ${props => props.theme.fontSizes.titleSmall};
  }
`

export const AnimeSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.subtitle};
  color: ${props => props.theme.colors.subtitle};
`

export const AnimeDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  text-align: justify;
  margin: 22px 0 0 0;
  width: 100%;
  @media only screen and (max-width: 780px) {
    width: 100%;
    position: absolute;
    width: calc(100vw - 50px);
    max-height: 150px;
    top: 400px;
    left: 25px;
    text-overflow: ellipsis;
    white-space: wrap;
    overflow: hidden;
    display: none;
  }
`

export const PrimaryInfoContainer = styled.div`
  margin: 34px 0 0 34px;
  @media only screen and (max-width: 780px) {
    margin: 34px 0 0 15px;
  }
`

export const CoverTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px 0 0 0;
  > div {
    margin: 0 12px 0 0;
  }
  @media only screen and (max-width: 780px) {
    width: 100%;
    flex-wrap: wrap;
    margin: 20px 0 0 0;
    > div {
      margin: 12px 12px 0 0;
    }
  }
`

export const LineTitle = styled.h3`
  width: 100%;
  color: ${props => props.theme.colors.textLight};
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  line-height: 0.1em;
  margin: 70px 0 20px;
  span {
    background: ${props => props.theme.colors.background};
    padding: 0 14px;
  }
`
export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  > p > b {
    font-weight: bold;
  }
  @media only screen and (max-width: 780px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-direction: column;
    align-items: center;
    > p {
      margin: 20px 0;
    }
  }
`
