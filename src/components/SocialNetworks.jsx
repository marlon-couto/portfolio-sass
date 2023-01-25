import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

import '../assets/styles/components/social_networks.sass';

const socialNetworks = [
  { name: 'linkedin', icon: <FaLinkedin /> },
  { name: 'github', icon: <FaGithub /> },
  { name: 'instagram', icon: <FaInstagram /> },
];

const SocialNetworks = () => {
  return (
    <section id="social_networks">
      {socialNetworks.map((network) => (
        <a
          key={network.name}
          href=""
          className="social_button"
          id={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
