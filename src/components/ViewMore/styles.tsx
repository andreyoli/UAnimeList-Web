import styled from 'styled-components';
import {lighten} from 'polished';

export const More = styled.a`
  color: ${props => props.theme.colors.subtitle};
  text-decoration: none;
  font-size: ${props => props.theme.fontSizes.text};
  :hover{
    color: ${props => lighten(0.2, props.theme.colors.subtitle)};
  }
`;
