import React from "react";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["ReactJS", "JavaScript", "HTML/CSS", "Tailwind","NextJS"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"]
    },
    {
      title: "Tools",
      icon: "🛠️",
      skills: ["Git", "VS Code", "Postman", "Socket.io"]
    },
    {
      title: "DSA & Competitive",
      icon: "🧠",
      skills: ["Data Structures", "Algorithms", "LeetCode", "Problem Solving"]
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      padding: '4rem 2rem', 
      maxWidth: '1200px', 
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
        ⚡ Skills & Technologies
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
      }}>
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            style={{
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
              borderRadius: '24px',
              padding: '2rem',
              border: '1px solid rgba(102, 126, 234, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
              {category.icon}
            </div>
            <h3 style={{
              color: '#fff',
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '1rem',
              textAlign: 'center',
            }}>
              {category.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  style={{
                    background: 'rgba(102, 126, 234, 0.2)',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* LeetCode Profile Link */}
      <div style={{
        textAlign: 'center',
        marginTop: '3rem',
      }}>
        <a
          href="https://leetcode.com/u/Gururaj_Hegde/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'linear-gradient(135deg, #a5a098ff 0%, #000000ff 100%)',
            color: '#fff',
            padding: '1rem 2rem',
            borderRadius: '50px',
            fontSize: '1.1rem',
            fontWeight: '700',
            textDecoration: 'none',
            boxShadow: '0 8px 32px rgba(34, 21, 2, 0.4)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 12px 48px rgba(255, 161, 22, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 161, 22, 0.4)';
          }}
        >
          <span style={{ fontSize: '1.5rem' }}>💻</span>
          View My LeetCode Profile
        </a>
      </div>
    </div>
  );
}

export default Skills;
