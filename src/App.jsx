import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Project from './components/Project.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Resume from './components/Resume.jsx';
import SlateWelcome from './components/SlateWelcome.jsx';

function App() {
  const [section, setSection] = useState('about');
  const [showWelcome, setShowWelcome] = useState(true);

  let SectionComponent;
  switch (section) {
    case 'about': SectionComponent = <About />; break;
    case 'projects': SectionComponent = <Project />; break;
    case 'skills': SectionComponent = <Skills />; break;
    case 'contact': SectionComponent = <Contact />; break;
    case 'resume': SectionComponent = <Resume />; break;
    default: SectionComponent = <About />;
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%)',
      color: '#fff',
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
    }}>
      {showWelcome ? (
        <div onClick={() => setShowWelcome(false)}>
          <SlateWelcome />
        </div>
      ) : (
        <>
          <Navbar onSectionChange={setSection} activeSection={section} />
          <main>{SectionComponent}</main>
        </>
      )}
    </div>
  );
}

export default App;