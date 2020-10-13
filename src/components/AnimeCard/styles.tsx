import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 45px;
  @media only screen and (max-width : 780px) {
    margin: 0 10px;
  }
`;

export const AnimeImage = styled.img`
  width: 176px;
  height: 250px;
  border-radius: 5px;
  @media only screen and (max-width : 780px) {
    width: 101px;
    height: 144px;
  }
`;

export const AnimeName = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.text};
  margin: 30px 0 40px 0;
  @media only screen and (max-width : 780px) {
    margin: 15px 0 0 0;
  }
`;