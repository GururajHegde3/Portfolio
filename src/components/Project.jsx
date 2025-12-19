import React from "react";
import aidpdfImage from '../assets/aipdf.webp';
import checkmatemateImage from '../assets/chessimg.jpeg';
import pinImage from '../assets/pinimage.jpg';

function Project() {
  const projects = [
    {
      title: "Devcollab",
      description: "Collaborative platform with real-time chat, AI assistance, and live project building",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
      link: "https://dev-collab-wj8u.onrender.com",
      tags: ["Real-time", "AI", "Collaboration"]
    },
    {
      title: "CheckmateMate",
      description: "Real-time chess game for two players powered by Socket.io",
      image: checkmatemateImage,
      link: "https://checkmatemate.onrender.com/",
      tags: ["Socket.io", "Real-time", "Game"]
    },
    {
      title: "AI PDF Notetaker",
      description: "Upload PDFs, generate AI notes from selected text, and download them",
      image: aidpdfImage,
      link: "https://ai-pdfnotetaker.onrender.com",
      tags: ["AI", "PDF", "Notes"]
    },
    {
      title: "iNotebook",
      description: "Online sticky notes platform for storing and managing your notes",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80",
      link: "https://inotebook-frontend-s401.onrender.com/login",
      tags: ["Notes", "Cloud", "Productivity"]
    },
    {
      title: "Pin",
      description: "Pinterest clone for sharing and discovering inspiring images",
      image: pinImage,
      link: "https://pin-ei6w.onrender.com/",
      tags: ["Social", "Images", "Discovery"]
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '4rem 2rem', 
      maxWidth: '1400px', 
      margin: '0 auto',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '3rem',
        fontWeight: '800',
        marginBottom: '3rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        💼 My Projects
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
      }}>
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(102, 126, 234, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(102, 126, 234, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
            }}
          >
            <div style={{
              height: '200px',
              overflow: 'hidden',
              position: 'relative',
            }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                padding: '2rem 1rem 1rem',
              }} />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{
                color: '#fff',
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '0.5rem',
              }}>
                {project.title}
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '1rem',
              }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      background: 'rgba(102, 126, 234, 0.2)',
                      color: '#a5b4fc',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.85rem',
                      fontWeight: '500',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Project;
