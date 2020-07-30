import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  width: 352px;
  height: 198px;
  border-radius: 20px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  filter: grayscale(0.4);
  transition: opacity .5s, background-size .7s, filter .5s;
  &:hover,
  &:focus {
    filter: grayscale(0);
    background-size: initial;
  }
  &:not(:first-child) {
    margin-left: 20px;
  
  }
`;

export const VideoCardContainerE = styled.div`
  height: 300px;
  
`;

