import styled from 'styled-components';
import { media } from '../../bosons/media';

export const ProjectTitle = styled.h1`
  font-size: 20px;
  font-weight: 400;
  opacity: 0;
  transition: opacity .3s ease;

  ${media.mobile`
    opacity: 1;
  `}
`;

export const ProjectThumbContainer = styled.article`
  position: relative;
  width: 31.3333333333333%;
  margin: 20px 1% 0;

  ${media.mobile`
    width: 95%;
    margin: 10px 2.5%;
  `}

  &:hover{
    ${ProjectTitle} {
      opacity: 1;
    }
  }
`;

export const ProjectThumbImage = styled.img`
  width: 100%;
`;