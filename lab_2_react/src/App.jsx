import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import TechSkills from './components/TechSkills';
import Projects from './components/Projects';
import Education from './components/Education';
import AdditionalInfo from './components/AdditionalInfo';

function App() {
  return (
    <main>
      <Header />
      <Summary />
      <TechSkills />
      <Projects />
      <Education />
      <AdditionalInfo />
    </main>
  );
}

export default App;
