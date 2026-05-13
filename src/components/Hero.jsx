import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ padding: '0 5vw', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ maxWidth: '650px', marginRight: 'auto' }}
        >
          <div className="dave-box" style={{ background: 'rgba(255,255,255,0.25)' }}>
            <h1 style={{ 
              fontSize: 'clamp(4rem, 10vw, 7rem)', 
              lineHeight: '1', 
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
              textShadow: '3px 3px 0px rgba(0,0,0,0.2)'
            }}>
              HEY!
            </h1>
            
            <hr style={{ border: 'none', borderTop: '2px dashed var(--box-border)', margin: '1.5rem 0' }} />

            <div style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.6', 
              fontWeight: 600,
              color: 'var(--text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <p>You've arrived at the portfolio of <strong>Aditi Rathore</strong> — researcher, builder, and founder, somehow running three degrees at once (IIT Madras, University of Delhi, IIM Bangalore). Not chaos — intention.</p>
              <p>I build AI that explains itself, train models on satellite imagery and clinical data, and founded a card game company on the side. Every turn of the kaleidoscope reveals something different — but it's all the same person.</p>
              <p>Explore the work. You'll see what I mean.</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator matching the theme */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 800 }}
      >
        <span style={{ fontSize: '0.9rem', letterSpacing: '0.1em' }}>SCROLL</span>
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          style={{ width: '2px', height: '30px', background: 'var(--text-primary)' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
