import styled, { css } from 'styled-components';

export const HeaderTitle = styled.h1`
  font-size: 36px;
  font-weight: 400;
  margin: 40px 0;
  text-align: center;
  transition: all .3s ease;
  opacity: .6;
  outline: 0;
`;

export const HeaderContainer = styled.header`
  position: relative;
  overflow: hidden;
  
  ${props => !props.isHome && css`
    ${HeaderTitle} {
      transform: scale(0.8);
      opacity: .4;
    }
  `}

`;
