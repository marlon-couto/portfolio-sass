import React from 'react';
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from 'react-icons/di';

import '../assets/styles/components/technologies.sass';

const technologies = [
  { id: 'html', name: 'HTML5', icon: <DiHtml5 /> },
  { id: 'css', name: 'CSS3', icon: <DiCss3 /> },
  { id: 'js', name: 'JavaScript', icon: <DiJsBadge /> },
  { id: 'node', name: 'Node.js', icon: <DiNodejsSmall /> },
  { id: 'mysql', name: 'MySQL', icon: <DiMysql /> },
  { id: 'react', name: 'React', icon: <DiReact /> },
];

const Technologies = () => {
  return (
    <section className="technologies_container">
      <h2>Tecnologias</h2>
      <div className="technologies_grid">
        {technologies.map((tech) => (
          <div
            key={tech.id}
            className="technology_card"
            id={tech.id}
          >
            {tech.icon}
            <div className="technology_info">
              <h3>{tech.name}</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;