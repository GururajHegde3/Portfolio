import React, { useState } from 'react';    
import Guruphoto from '../assets/guruphoto.jpg'

function About() {
  const [typing, setTyping] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentWord, setCurrentWord] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const words = [
    'react', 'javascript', 'python', 'coding', 'developer', 'frontend', 
    'backend', 'database', 'algorithm', 'function', 'variable', 'array',
    'component', 'useState', 'async', 'await', 'promise', 'fetch',
    'typescript', 'debug', 'console', 'object', 'string', 'boolean',
  'compile', 'runtime', 'frontend', 'api', 'server', 'client',
  'express', 'nodejs', 'framework', 'library', 'hexadecimal',
  'binary', 'json', 'query', 'endpoint', 'router', 'handler',
  'github', 'commit', 'push', 'branch', 'merge', 'pullrequest',
  'token', 'session', 'authentication', 'encryption', 'hashing',
  'loop', 'iteration', 'condition', 'operator', 'class', 'module',
  'package', 'bundle', 'optimize', 'refactor', 'cleanup', 'syntax',
  'npm', 'yarn', 'vite', 'webpack', 'babel', 'build', 'deploy',
  'cloud', 'docker', 'container', 'virtual', 'database', 'schema',
  'index', 'foreignkey', 'primarykey', 'migration', 'endpoint'
  ];

  React.useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && isPlaying) {
      setIsPlaying(false);
      setGameOver(true);
    }
  }, [timeLeft, isPlaying]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(20);
    setIsPlaying(true);
    setGameOver(false);
    setTyping('');
    setCurrentWord(words[Math.floor(Math.random() * words.length)]);
  };

  const handleTyping = (e) => {
    const value = e.target.value;
    setTyping(value);
    
    if (value === currentWord) {
      setScore(score + 1);
      setTyping('');
      setCurrentWord(words[Math.floor(Math.random() * words.length)]);
      setTimeLeft(timeLeft); // Bonus time
    }
  };

  const resetGame = () => {
    setScore(0);
    setTimeLeft(20);
    setIsPlaying(false);
    setGameOver(false);
    setTyping('');
    setCurrentWord('');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      width: '100%',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        width: '100%',
      }}>
        {/* Profile Card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
          borderRadius: '24px',
          padding: '3rem 2rem',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(102, 126, 234, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid rgba(102, 126, 234, 0.5)',
            boxShadow: '0 0 40px rgba(102, 126, 234, 0.3)',
            marginBottom: '1.5rem',
          }}>
            <img
              src={Guruphoto}
              alt="Gururaj Hegde"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <h2 style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '2rem',
            fontWeight: '800',
            marginBottom: '0.5rem',
          }}>
            Gururaj Hegde
          </h2>
          <div style={{
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)',
            padding: '0.5rem 1rem',
            borderRadius: '12px',
            marginBottom: '1rem',
            border: '1px solid rgba(102, 126, 234, 0.3)',
          }}>
            <p style={{
              color: '#4ade80',
              fontSize: '0.95rem',
              fontWeight: '600',
              margin: 0,
            }}>
              💼 Frontend Developer Intern @ Barracuda Networks
            </p>
          </div>
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '1rem',
            lineHeight: '1.6',
            marginTop: '1rem',
          }}>
            🎓 4th year AIDS student at SIT<br />
            💻 Passionate developer & tech enthusiast<br />
            🚀 Jack of all trades, master of none<br />
            ✨ Always curious, always learning<br />
          </p>
        </div>

        {/* Typing Speed Game Card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(118, 75, 162, 0.1) 0%, rgba(102, 126, 234, 0.1) 100%)',
          borderRadius: '24px',
          padding: '3rem 2rem',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(118, 75, 162, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <h3 style={{
            color: '#fff',
            fontSize: '1.5rem',
            fontWeight: '700',
            marginBottom: '1rem',
          }}>
            ⚡ Code Typer Challenge
          </h3>
          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.9rem',
            marginBottom: '1.5rem',
            textAlign: 'center',
          }}>
            Type coding terms as fast as you can!
          </p>

          <div style={{
            display: 'flex',
            gap: '2rem',
            marginBottom: '2rem',
            width: '100%',
            justifyContent: 'center',
          }}>
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '1rem 1.5rem',
              borderRadius: '16px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#4ade80' }}>
                {score}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                Words
              </div>
            </div>
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '1rem 1.5rem',
              borderRadius: '16px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#fbbf24' }}>
                {timeLeft}s
              </div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                Time
              </div>
            </div>
          </div>

          {isPlaying && (
            <>
              <div style={{
                background: 'rgba(102, 126, 234, 0.2)',
                padding: '2rem',
                borderRadius: '16px',
                marginBottom: '1.5rem',
                width: '100%',
                textAlign: 'center',
                border: '2px solid rgba(102, 126, 234, 0.4)',
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#fff',
                  fontFamily: 'monospace',
                  letterSpacing: '0.1em',
                }}>
                  {currentWord}
                </div>
              </div>
              <input
                type="text"
                value={typing}
                onChange={handleTyping}
                autoFocus
                placeholder="Type here..."
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1.2rem',
                  borderRadius: '12px',
                  border: '2px solid rgba(102, 126, 234, 0.3)',
                  background: 'rgba(0, 0, 0, 0.3)',
                  color: '#fff',
                  textAlign: 'center',
                  fontFamily: 'monospace',
                  outline: 'none',
                  marginBottom: '1.5rem',
                }}
              />
            </>
          )}

          {gameOver && (
            <div style={{
              background: 'rgba(102, 126, 234, 0.2)',
              padding: '1.5rem',
              borderRadius: '16px',
              marginBottom: '1.5rem',
              textAlign: 'center',
              width: '100%',
            }}>
              <div style={{ fontSize: '1.5rem', color: '#4ade80', fontWeight: '700', marginBottom: '0.5rem' }}>
                🎉 Game Over!
              </div>
              <div style={{ fontSize: '1.2rem', color: '#fff' }}>
                You typed <span style={{ color: '#fbbf24', fontWeight: '700' }}>{score}</span> words correctly!
              </div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.6)', marginTop: '0.5rem' }}>
                WPM: {Math.round((score / 20) * 60)}
              </div>
            </div>
          )}

          <button
            onClick={gameOver ? resetGame : startGame}
            disabled={isPlaying && !gameOver}
            style={{
              background: isPlaying && !gameOver 
                ? 'rgba(102, 126, 234, 0.3)'
                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              color: '#fff',
              padding: '0.75rem 2rem',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: isPlaying && !gameOver ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 16px rgba(102, 126, 234, 0.4)',
              transition: 'all 0.3s ease',
              opacity: isPlaying && !gameOver ? 0.6 : 1,
            }}
            onMouseEnter={(e) => {
              if (!isPlaying || gameOver) {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.6)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isPlaying || gameOver) {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 16px rgba(102, 126, 234, 0.4)';
              }
            }}
          >
            {isPlaying ? '⌨️ Playing...' : gameOver ? '🔄 Play Again' : '🎮 Start Game'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
