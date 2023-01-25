import React from 'react';
import avatar from '../assets/img/profile.png';

import '../assets/styles/components/sidebar.sass';
import InfoContainer from './InfoContainer';
import SocialNetworks from './SocialNetworks';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img
        src={avatar}
        alt="Marlon Couto, desenvolvedor web"
      />

      <p className="title">Desenvolvedor Web</p>
      
      <SocialNetworks />
      
      <InfoContainer />

      <a
        href=""
        className="button"
      >
        Baixe meu currículo
      </a>
    </aside>
  );
};

export default Sidebar;
