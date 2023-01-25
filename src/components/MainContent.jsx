import React from 'react';

import About from './About';
import Technologies from './Technologies';
import Projects from './Projects';

import '../assets/styles/components/main_content.sass';

const MainContent = () => {
  return (
    <main id="main_content">
      <About />
      <Technologies />
      <Projects />
    </main>
  );
};

export default MainContent;
