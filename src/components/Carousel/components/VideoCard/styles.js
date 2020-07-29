import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  flex: 0 0 299px;
  width: 355px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  transition: opacity  .3s;
  &:hover,
  &:focus {
    opacity: .5;

  }
  
  &:not(:first-child) {
    margin-left: 20px;
  
  }
`;
