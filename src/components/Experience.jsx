import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="dave-box" style={{ background: 'rgba(255, 255, 255, 0.4)', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>Experience</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ padding: '1.5rem', border: '2px solid #000', borderRadius: '8px', background: 'rgba(255,255,255,0.7)' }}>
                <h3 style={{ fontSize: '1.5rem' }}>Website Development Intern</h3>
                <h4 style={{ fontWeight: 800, color: '#314fff', margin: '0.5rem 0' }}>
                  <a href="https://www.pravega.in/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Pravega — IISc Bangalore</a>
                </h4>
                <p style={{ fontWeight: 600 }}>Sep 2025 - Feb 2026</p>
                <p style={{ marginTop: '0.5rem', fontWeight: 600 }}>Developed and maintained the official web platform; on-site at IISc Bangalore campus.</p>
              </div>

              <div style={{ padding: '1.5rem', border: '2px solid #000', borderRadius: '8px', background: 'rgba(255,255,255,0.7)' }}>
                <h3 style={{ fontSize: '1.5rem' }}>Vice President</h3>
                <h4 style={{ fontWeight: 800, color: '#314fff', margin: '0.5rem 0' }}>E-Cell, Maitreyi College</h4>
                <p style={{ fontWeight: 600 }}>2025</p>
                <p style={{ marginTop: '0.5rem', fontWeight: 600 }}>Led initiatives and managed operations for the entrepreneurship cell.</p>
              </div>

              <div style={{ padding: '1.5rem', border: '2px solid #000', borderRadius: '8px', background: 'rgba(255,255,255,0.7)' }}>
                <h3 style={{ fontSize: '1.5rem' }}>Front-End Developer</h3>
                <h4 style={{ fontWeight: 800, color: '#314fff', margin: '0.5rem 0' }}>Mercury AI</h4>
                <p style={{ fontWeight: 600 }}>2025</p>
                <p style={{ marginTop: '0.5rem', fontWeight: 600 }}>Front-End Developer at Mercury AI, Delhi.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
