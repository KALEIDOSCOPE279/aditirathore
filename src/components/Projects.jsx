import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Medical Q&A RAG System",
    category: "LLM, Retrieval-Augmented Gen",
    description: "Built a RAG pipeline over Indian health documents using LangChain, FAISS, and Sentence-Transformers. Integrated Groq API for fast inference."
  },
  {
    title: "F1 Race Outcome Predictor",
    category: "Tabular ML, Analytics",
    description: "Engineered features from 70+ years of F1 data. Trained XGBoost and LightGBM classifiers to predict race winners with SHAP explainability."
  },
  {
    title: "RailBhaar",
    category: "Operations Research",
    description: "Indian Railways Freight Dead-Leg Optimizer. Applied K-Means clustering projecting ~15% reduction in empty wagon miles."
  },
  {
    title: "VanRakshak AI",
    category: "Satellite Detection",
    description: "Multi-temporal LISS-4 satellite imagery change detection using NDVI-based feature pipeline with Random Forest classifier."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="dave-box" style={{ background: 'rgba(255, 255, 255, 0.4)' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Selected Works</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {projects.map((project, index) => (
                <div key={index} style={{ border: '2px solid #000', borderRadius: '8px', padding: '1.5rem', background: 'rgba(255,255,255,0.7)' }}>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                  <p style={{ fontWeight: 800, fontSize: '0.9rem', marginBottom: '1rem', color: '#314fff' }}>{project.category}</p>
                  <p style={{ fontWeight: 600, lineHeight: '1.5' }}>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
