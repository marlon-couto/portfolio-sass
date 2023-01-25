import React from 'react';
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import '../assets/styles/components/info_container.sass';

const InfoContainer = () => {
  return (
    <section id="info_container">
      <div className="info_card">
        <AiFillPhone id="phone_icon" />
        <div>
          <h3>Telefone</h3>
          <p>(11) 94214-8158</p>
        </div>
      </div>

      <div className="info_card">
        <AiOutlineMail id="mail_icon" />
        <div>
          <h3>Email</h3>
          <p>marloncouto.dev@gmail.com</p>
        </div>
      </div>

      <div className="info_card">
        <AiFillEnvironment id="location_icon" />
        <div>
          <h3>Localização</h3>
          <p>São Paulo - SP, Brasil</p>
        </div>
      </div>
    </section>
  );
};

export default InfoContainer;
