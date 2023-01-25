import React from 'react';

import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

import './assets/styles/components/app.sass';

export default function App() {
  return (
    <div id="portfolio">
      <h1>Marlon Couto</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}
