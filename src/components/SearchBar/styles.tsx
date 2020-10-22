import styled from 'styled-components'
import { opacify } from 'polished'
import { Form } from '@unform/web'
import { IoIosSearch } from 'react-icons/io'

export const SearchIcon = styled(IoIosSearch)`
  color: ${props => props.theme.colors.textDark};
`

export const Container = styled.div`
  width: 440px;
  position: relative;
  display: flex;
  height: 30px;
  margin: 0 0 0 -20px;

  @media only screen and (max-width: 780px) {
    position: fixed;
    bottom: 0;
    width: 80%;
    margin: 0 0 20px -20px;
    filter: drop-shadow(
      4px 4px 8px ${props => opacify(0.9, props.theme.colors.shadow)}
    );
  }
`
export const FormStyled = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  width: 45px;
  height: 30px;
  border: none;
  background: ${props => props.theme.colors.secondary};
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  :focus {
    outline: none;
  }
`
