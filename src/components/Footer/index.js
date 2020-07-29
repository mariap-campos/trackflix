import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/mariap-campos">
        <img src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" alt="Logo Github" />
      </a>
      <a href="https://www.linkedin.com/in/maria-p-campos/">
        <img src="https://oficinadainteligencia.com.br/wp-content/uploads/2019/04/simple-icon-linkedin-white.png" alt="Logo Linkedin" />
      </a>
      <p>
        Página desenvolvida por 
        {' '}
        <a href="/">
          mashpaula
        </a>
        {' '}

        durante a #ImersãoReact da Alura
      </p>
    </FooterBase>
  );
}

export default Footer;
