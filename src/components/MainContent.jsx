import React from 'react';

import About from './About';
import Technologies from './Technologies';
import Projects from './Projects';

import '../styles/components/main-content.sass';

export default function MainContent() {
  return (
    <main id="main-content">
      <About />
      <Technologies />
      <Projects />
    </main>
  );
}
