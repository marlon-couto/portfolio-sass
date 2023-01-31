import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

import '../styles/components/social-networks.sass';

const socialNetworks = [
  { name: 'linkedin', icon: <FaLinkedin /> },
  { name: 'github', icon: <FaGithub /> },
  { name: 'instagram', icon: <FaInstagram /> },
];

export default function SocialNetworks() {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          key={network.name}
          href="#"
          className="social-button"
          id={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
}
