import styled from 'styled-components';
import { media } from '../../bosons/media';

export const BioContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
`;

export const BioText = styled.div`
  font-family: 'Roboto Slab',sans-serif;
  font-size: 16px;
  line-height: 2;
  text-align: left;

  ${media.mobile`
    font-size: 16px;
    text-align: left;
  `}
`;