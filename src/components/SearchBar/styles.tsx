import styled from 'styled-components';
import {lighten, opacify} from 'polished';
import {IoIosSearch} from 'react-icons/io'

export const SearchIcon = styled(IoIosSearch)`
  color: ${props => props.theme.colors.textDark};
`;

export const Container = styled.div`
  width: 440px;
  position: relative;
  display: flex;
  height: 30px;

  @media only screen and (max-width : 780px) {
    //display: none;
    position: fixed;
    bottom: 0;
    width: 80%;
    margin: 0 0 20px 20px;
    filter: drop-shadow(4px 4px 8px ${props => opacify(0.9, props.theme.colors.shadow)});
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px 5px 5px 15px;
  height: 30px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color:  ${props => props.theme.colors.textLight};
  border: none;
  background: ${props => lighten(0.05, props.theme.colors.background)};
  ::placeholder{
    font-size: ${props => props.theme.fontSizes.text};
    color: ${props => props.theme.colors.subtitle};
  }
`;

export const Button = styled.button`
  width: 45px;
  height: 30px;
  border: none;
  background:  ${props => props.theme.colors.secondary};
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  :focus{
    outline: none;
  }
`
