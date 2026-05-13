import React from 'react';

const Contact = () => {
  return (
    <footer id="contact" style={{ 
      background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.95) 100%)', 
      color: '#fff', 
      padding: '8rem 2rem 6rem 2rem', 
      marginTop: '6rem', 
      position: 'relative',
      zIndex: 20
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <h2 style={{ 
          fontSize: 'clamp(5rem, 15vw, 15rem)', 
          lineHeight: '0.8', 
          marginBottom: '2rem', 
          textAlign: 'center',
          letterSpacing: '-0.05em',
          color: '#fff',
          textShadow: '4px 4px 10px rgba(0,0,0,0.5)'
        }}>
          LET'S TALK
        </h2>

        <p style={{ 
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', 
          fontWeight: 600, 
          textAlign: 'center', 
          maxWidth: '800px', 
          marginBottom: '4rem',
          color: 'rgba(255,255,255,0.9)',
          textShadow: '1px 1px 5px rgba(0,0,0,0.5)'
        }}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '8rem' }}>
          <a href="mailto:aditirathore279@gmail.com" style={{ 
            fontSize: '1.1rem', fontWeight: 800, padding: '1rem 2rem', border: '2px solid #fff', borderRadius: '50px', transition: 'all 0.3s', background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(5px)'
          }} onMouseEnter={(e) => {e.target.style.background='#fff'; e.target.style.color='#000'}} onMouseLeave={(e) => {e.target.style.background='rgba(0,0,0,0.3)'; e.target.style.color='#fff'}}>
            EMAIL ME
          </a>
          <a href="https://www.linkedin.com/in/aditirathore279/" target="_blank" rel="noopener noreferrer" style={{ 
            fontSize: '1.1rem', fontWeight: 800, padding: '1rem 2rem', border: '2px solid #fff', borderRadius: '50px', transition: 'all 0.3s', background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(5px)'
          }} onMouseEnter={(e) => {e.target.style.background='#fff'; e.target.style.color='#000'}} onMouseLeave={(e) => {e.target.style.background='rgba(0,0,0,0.3)'; e.target.style.color='#fff'}}>
            LINKEDIN
          </a>
          <a href="https://www.instagram.com/aditi.teaverse/" target="_blank" rel="noopener noreferrer" style={{ 
            fontSize: '1.1rem', fontWeight: 800, padding: '1rem 2rem', border: '2px solid #fff', borderRadius: '50px', transition: 'all 0.3s', background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(5px)'
          }} onMouseEnter={(e) => {e.target.style.background='#fff'; e.target.style.color='#000'}} onMouseLeave={(e) => {e.target.style.background='rgba(0,0,0,0.3)'; e.target.style.color='#fff'}}>
            INSTAGRAM
          </a>
        </div>

        <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontWeight: 800, fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
            &copy; {new Date().getFullYear()} ADITI RATHORE.
          </p>
          <p style={{ fontWeight: 800, fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
            BUILT WITH REACT & FRAMER MOTION.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Contact;
