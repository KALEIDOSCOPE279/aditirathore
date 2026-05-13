import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="dave-box" style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Me</h2>
            
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Education</h3>
              <div style={{ marginBottom: '1.5rem', borderLeft: '4px solid #000', paddingLeft: '1rem' }}>
                <h4 style={{ fontSize: '1.2rem' }}>B.S. in Data Science and Applications</h4>
                <p style={{ fontWeight: 600 }}>IIT Madras (CGPA: 8.43) | 2024 - Present</p>
              </div>
              <div style={{ marginBottom: '1.5rem', borderLeft: '4px solid #000', paddingLeft: '1rem' }}>
                <h4 style={{ fontSize: '1.2rem' }}>B.Sc. Major in CS with Minor in Mathematics</h4>
                <p style={{ fontWeight: 600 }}>Maitreyi College, DU | 2024 - Present</p>
              </div>
              <div style={{ borderLeft: '4px solid #000', paddingLeft: '1rem' }}>
                <h4 style={{ fontSize: '1.2rem' }}>BBA in Digital Business & Entrepreneurship (DBE)</h4>
                <p style={{ fontWeight: 600 }}>IIM Bangalore | 2025 - Present</p>
              </div>
            </div>

            <hr style={{ border: 'none', borderTop: '2px dashed var(--box-border)', margin: '2rem 0' }} />

            <div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Research</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', fontWeight: 600 }}>
                Current focus on Explainable Counterfactual Insights for Managing Diabetes Mellitus. Benchmarked ML models and applied SHAP for feature attribution, generating counterfactual explanations using DiCE and Alibi for personalized patient guidance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
