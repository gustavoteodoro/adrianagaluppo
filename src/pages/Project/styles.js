import styled from 'styled-components';

export const ProjectContainer = styled.main`
  display: block;
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const ProjectTitle = styled.h1`
  font-family: 'Roboto Slab',sans-serif;
  font-weight: 400;
  font-size: 70px;
  text-align: right;
  margin-top: 0;
  margin-bottom: -70px;
  margin-right: 100px;
`;

export const ProjectDesc = styled.p`
font-family: 'Roboto Slab',sans-serif; 
  display: block;
  font-weight: 400;
  max-width: 500px;
  text-align: left;
  font-size: 22px;
  margin-left: 100px;
  margin-bottom: 0;
  margin-top: 0;
`;

export const ProjectImage = styled.img`
  display: block;
  max-width: 100%;
  margin: 100px auto;
`;