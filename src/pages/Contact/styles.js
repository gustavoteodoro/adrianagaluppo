import styled from 'styled-components';
import { media } from '../../bosons/media';

export const ContactContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const ContactText = styled.div`
  font-family: 'Roboto',sans-serif;
  font-size: 22px;
  line-height: 2;
  text-align: center;

  ${media.mobile`
    font-size: 16px;
  `}
`;