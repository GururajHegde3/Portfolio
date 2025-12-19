import React, { useState } from 'react';

// Navbar Component
function Navbar({ onSectionChange, activeSection }) {
  const sections = [
    { key: "about", label: "About", icon: "👤" },
    { key: "projects", label: "Projects", icon: "💼" },
    { key: "skills", label: "Skills", icon: "⚡" },
    { key: "contact", label: "Contact", icon: "📬" },
    { key: "resume", label: "Resume", icon: "📄" },
  ];

  return (
    <nav style={{
      background: 'rgba(20, 20, 30, 0.95)',
      backdropFilter: 'blur(20px)',
      padding: '1.5rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '1px solid rgba(78, 154, 241, 0.2)',
    }}>
      <ul style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        flexWrap: 'wrap',
      }}>
        {sections.map((section) => (
          <li key={section.key}>
            <button
              onClick={() => onSectionChange(section.key)}
              style={{
                background: activeSection === section.key 
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  : 'rgba(255, 255, 255, 0.05)',
                border: activeSection === section.key 
                  ? '2px solid rgba(102, 126, 234, 0.5)'
                  : '2px solid transparent',
                color: '#fff',
                fontSize: '1rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                cursor: 'pointer',
                fontWeight: activeSection === section.key ? '700' : '500',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transform: activeSection === section.key ? 'scale(1.05)' : 'scale(1)',
                boxShadow: activeSection === section.key 
                  ? '0 8px 32px rgba(102, 126, 234, 0.4)'
                  : '0 2px 8px rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={(e) => {
                if (activeSection !== section.key) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'scale(1.05) translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== section.key) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.transform = 'scale(1)';
                }
              }}
            >
              <span>{section.icon}</span>
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;