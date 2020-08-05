import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  width: 300px;
  height: 300px;
  background-color: var(--black);
  border-radius: 20px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: 550px 400px;
  background-position: center; 
  position: relative;
  display: flex;
  filter: grayscale(0.4);
  transition: opacity .5s, filter .5s,  background-size .5s;
  &:hover,
  &:focus {
    filter: grayscale(0);
    background-size: 600px 430px;
    
  }
  &:not(:first-child) {
    margin-left: 20px;
  }
  & img{
    width: 300px;
    height: 300px;
  }
`;




