import styled from 'styled-components'
import { IoIosStarHalf, IoIosStar, IoIosStarOutline } from 'react-icons/io'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
`

export const Star = styled(IoIosStar)`
  color: ${props => props.theme.colors.primary};
`

export const StarHalf = styled(IoIosStarHalf)`
  color: ${props => props.theme.colors.primary};
`

export const StarEmpety = styled(IoIosStarOutline)`
  color: ${props => props.theme.colors.primary};
`
