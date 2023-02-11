import React from 'react';

import InfoContainer from './InfoContainer';
import SocialNetworks from './SocialNetworks';
// TODO: trocar imagem de perfil
import avatar from '../img/profile.png';
import '../styles/components/sidebar.sass';

export default function Sidebar() {
  return (
    <aside id="sidebar">
      <img src={avatar} alt="Marlon Couto, desenvolvedor web" />
      <p className="title">Desenvolvedor Web</p>

      <SocialNetworks />
      <InfoContainer />

      <a href="#" className="button">
        Baixe meu currículo
      </a>
    </aside>
  );
}
