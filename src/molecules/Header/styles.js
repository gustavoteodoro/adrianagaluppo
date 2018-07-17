import styled, { css } from 'styled-components';
import { media } from '../../bosons/media';

export const HeaderTitle = styled.h1`
  font-size: 36px;
  font-weight: 400;
  margin: 40px 0;
  text-align: center;
  transition: all .3s ease;
  opacity: .6;
  outline: 0;
  margin-bottom: 10px;
`;

export const HeaderNav = styled.nav`
  margin-bottom: 20px;
  opacity: 0;
  transition: opacity .4s ease;

  ${media.mobile`
    opacity: 1;
  `}
`
export const HeaderList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const MenuItem = styled.li`
  display: block;
  margin: 0 20px;
  opacity: 0.5;
  transition: opacity .4s ease;

  &:hover{
    opacity: 0.7;
  }
`

export const HeaderContainer = styled.header`
  position: relative;
  overflow: hidden;
  
  &:hover{
    ${HeaderNav} {
      opacity: 1;
    }
  }

  ${props => !props.isHome && css`
    ${HeaderTitle} {
      transform: scale(0.8);
      opacity: .4;
    }
  `}

`;