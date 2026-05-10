import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const showcaseCards = [
  {
    title: 'Final Report.',
    description: 'A comprehensive academic document detailing the full lifecycle of the AR Fossil & Fauna Tour, including implementation, evaluation, and conclusions.',
    href: '/final-report.pdf',
    downloadName: 'Final_Report.pdf'
  },
  {
    title: 'Feasibility Report.',
    description: 'Technical and operational feasibility analysis conducted during the project’s conceptual phase to ensure the viability of the immersive museum system.',
    href: '/feasibility-report.pdf',
    downloadName: 'Feasibility_Report.pdf'
  },
  {
    title: 'Project Proposal.',
    description: 'The initial conceptual framework, methodology, and research objectives defined at the start of the AR museum exploration initiative.',
    href: '/proposal.docx',
    downloadName: 'Project_Proposal.docx'
  }
];

const ResourceHubSection: React.FC = () => {
  return (
    <section
      id="resource-hub"
      style={{
        position: 'relative',
        padding: '12rem 0',
        backgroundColor: '#ffffff', // Pure white background
        color: '#1d1d1f',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Editorial Heading */}
        <div style={{ textAlign: 'center', marginBottom: '8rem', maxWidth: '800px', margin: '0 auto 8rem auto' }}>
          <span style={{
            display: 'block',
            fontSize: '1rem',
            fontWeight: 600,
            color: '#86868b',
            marginBottom: '1rem'
          }}>
            Resource Hub
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(3.5rem, 6vw, 6rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              marginBottom: '2rem',
              color: '#1d1d1f'
            }}
          >
            Built for <br />
            <span className="text-gradient-accent">
              Real-World Deployment.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              fontWeight: 500,
              color: '#1d1d1f',
              lineHeight: 1.6,
              letterSpacing: '-0.01em',
              maxWidth: '650px',
              margin: '0 auto'
            }}
          >
            Explore the research, technical architecture, and demonstration resources behind the immersive educational platform.
          </motion.p>
        </div>

        {/* Clean Resource Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2.5rem',
          alignItems: 'stretch'
        }}>
          {showcaseCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#f5f5f7',
                borderRadius: '40px',
                padding: '3.5rem 3rem',
                border: '1px solid rgba(0,0,0,0.02)',
                transition: 'all 0.4s ease'
              }}
              whileHover={{ y: -10, backgroundColor: '#f0f0f2' }}
            >
              <div style={{ flexGrow: 1 }}>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  marginBottom: '1.5rem',
                  color: '#1d1d1f',
                  lineHeight: 1.2
                }}>
                  {card.title}
                </h3>

                <p style={{
                  fontSize: '1.15rem',
                  lineHeight: 1.5,
                  color: '#86868b',
                  marginBottom: '3rem',
                  fontWeight: 500
                }}>
                  {card.description}
                </p>
              </div>

              <motion.a
                href={card.href}
                download={card.downloadName}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.8rem',
                  padding: '1.2rem 2.5rem',
                  backgroundColor: '#3b82f6', // Gradient's first color blue
                  color: '#ffffff',
                  borderRadius: '100px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 15px 30px rgba(59, 130, 246, 0.25)',
                  transition: 'all 0.3s ease'
                }}
              >
                Download Document <Download size={20} strokeWidth={2.5} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceHubSection;
