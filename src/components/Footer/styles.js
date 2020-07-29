import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: var(--grayMedium);
  text-align: center;
  font-size: 18px;
  & img{
    width: 35px;
    margin-left: 5px;
    margin-bottom: -10px;
    opacity: 40%;
  }
  @media (max-width: 800px) {
    margin-bottom: 30px;
  }
`;
