import styled from 'styled-components';

const Button = styled.button`
    background: linear-gradient(130deg, var(--primary) 100%, var(--secundary) 431E52%);
    color: var(--white);
    border: 1px solid transparent;
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s, padding .3s;
    &:hover,
    &:focus {
    opacity: .5;
    padding: 16px 30px;

  }
`;

export default Button;
