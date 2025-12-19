import React from 'react';

function SlateWelcome() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%)',
      cursor: 'pointer',
    }}>
      <div style={{
        textAlign: 'center',
        animation: 'fadeIn 1s ease-in',
      }}>
        <h1 style={{
          fontSize: '5rem',
          fontWeight: '900',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem',
          animation: 'glow 2s ease-in-out infinite alternate',
        }}>
          Welcome
        </h1>
        <p style={{
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '1.5rem',
          animation: 'pulse 2s ease-in-out infinite',
        }}>
          Click anywhere to enter ✨
        </p>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          from { filter: drop-shadow(0 0 20px rgba(102, 126, 234, 0.5)); }
          to { filter: drop-shadow(0 0 40px rgba(118, 75, 162, 0.8)); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default SlateWelcome;