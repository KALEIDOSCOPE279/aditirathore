import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  { title: "ML Frameworks", skills: ["scikit-learn", "XGBoost", "LightGBM", "PyTorch", "MLflow", "SMOTE / SMOTE-ENN", "Stratified k-fold CV"] },
  { title: "LLMs & RAG", skills: ["LangChain", "FAISS", "Sentence-Transformers", "Groq API", "RAGAS", "Hugging Face", "Prompt Engineering"] },
  { title: "Computer Vision", skills: ["OpenCV", "MediaPipe", "SHAP / DiCE", "NDVI Analysis", "Satellite Imagery", "Rasterio", "Alibi"] },
  { title: "Web Tech", skills: ["React", "JavaScript", "Python / SQL", "HTML / CSS", "Flask / FastAPI", "Firebase", "Gradio / Streamlit"] },
  { title: "Data & Research", skills: ["Pandas / NumPy", "Matplotlib / Seaborn", "GeoPandas", "Clinical Datasets", "Explainable AI", "Research Writing", "Git / Jupyter"] },
  { title: "Soft Skills", skills: ["Strong Communicator", "Public Speaking", "Team Leadership", "Research Writing", "Problem Solving", "Entrepreneurship", "Cross-domain Thinking"] }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '3rem', textAlign: 'center', color: '#fff', textShadow: '2px 2px 0 #000' }}>Services & Skills</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {skillCategories.map((category, index) => (
              <div key={index} className="dave-box" style={{ 
                position: 'relative', 
                overflow: 'hidden', 
                background: 'rgba(255,255,255,0.85)', 
                display: 'flex', 
                flexDirection: 'column',
                padding: '2.5rem'
              }}>
                {/* Decorative Number */}
                <div style={{ position: 'absolute', top: '-10px', right: '10px', fontSize: '8rem', fontWeight: 900, color: 'rgba(0,0,0,0.04)', lineHeight: 1, zIndex: 0 }}>
                  0{index + 1}
                </div>
                
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', borderBottom: '2px solid #000', paddingBottom: '0.5rem', zIndex: 1, position: 'relative' }}>
                  {category.title}
                </h3>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', zIndex: 1, position: 'relative' }}>
                  {category.skills.map((skill, i) => (
                    <span key={i} style={{ 
                      fontWeight: 700, 
                      fontSize: '1.05rem', 
                      color: 'var(--text-secondary)'
                    }}>
                      {skill}{i < category.skills.length - 1 ? <span style={{ color: '#314fff', margin: '0 0.3rem', fontWeight: 900 }}>/</span> : ''}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
