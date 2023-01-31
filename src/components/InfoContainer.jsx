import React from 'react';
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import '../styles/components/info-container.sass';

export default function InfoContainer() {
  return (
    <section id="info-container">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(11) 94214-8158</p>
        </div>
      </div>

      <div className="info-card">
        <AiOutlineMail id="mail-icon" />
        <div>
          <h3>Email</h3>
          <p>marloncouto.dev@gmail.com</p>
        </div>
      </div>

      <div className="info-card">
        <AiFillEnvironment id="location-icon" />
        <div>
          <h3>Localização</h3>
          <p>São Paulo - SP, Brasil</p>
        </div>
      </div>
    </section>
  );
}
