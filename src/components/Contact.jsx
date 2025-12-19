import React from 'react';

function Contact() {
  const contactLinks = [
    { platform: 'GitHub', url: 'https://github.com/GururajHegde3/', icon: '🐙' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/gururaj-hegde-78b267251/', icon: '💼' },
    { platform: 'Email', url: 'mailto:rguru7825@gmail.com', icon: '📧' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      padding: '4rem 2rem',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <h2 style={{
        fontSize: '3rem',
        fontWeight: '800',
        marginBottom: '2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        📬 Get In Touch
      </h2>
      <p style={{
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '1.2rem',
        marginBottom: '2rem',
        lineHeight: '1.6',
      }}>
        Feel free to reach out for collaborations or just a friendly hello!
      </p>
      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        {contactLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              color: '#fff',
              padding: '1rem 2rem',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4)',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 12px 48px rgba(102, 126, 234, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(102, 126, 234, 0.4)';
            }}
          >
            <span>{link.icon}</span>
            {link.platform}
          </a>
        ))}
      </div>
    </div>
  );
}
export default Contact;
