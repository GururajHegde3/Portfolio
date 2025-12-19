function Resume() {
  const handleDownload = () => {
    // Replace this URL with your actual resume file URL
    // You can host it on Google Drive, Dropbox, or in your project's public folder
    const resumeUrl = 'https://drive.google.com/file/d/1jxP1FmWRE-rV1gNjlnAFABMWNFKz3fO2/view?usp=drivesdk'; // Update this path
    
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Gururaj_Hegde_Resume.pdf'; // The downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        📄 Resume
      </h2>
      <div style={{
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
        borderRadius: '24px',
        padding: '3rem 2rem',
        border: '1px solid rgba(102, 126, 234, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      }}>
        <p style={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '1.2rem',
          marginBottom: '2rem',
        }}>
          Download my resume to know more about my experience and skills!
        </p>
        <button 
          onClick={handleDownload}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            color: '#fff',
            padding: '1rem 3rem',
            borderRadius: '50px',
            fontSize: '1.2rem',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4)',
            transition: 'all 0.3s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 12px 48px rgba(102, 126, 234, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(102, 126, 234, 0.4)';
          }}
        >
          <span style={{ fontSize: '1.5rem' }}>⬇️</span>
          Download Resume
        </button>
      </div>
    </div>
  );
}
export default Resume;
