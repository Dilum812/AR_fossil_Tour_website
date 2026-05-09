import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const showcaseCards = [
  {
    title: 'Research Proposal.',
    description: 'Explore the academic foundation, problem analysis, research methodology, and conceptual direction behind the AR Fossil & Fauna Tour platform.',
    image: '/resource-proposal.png',
    links: [
      { text: 'Download proposal', href: '#' }
    ]
  },
  {
    title: 'Technical Documentation.',
    description: 'Discover the engineering architecture powering the immersive museum ecosystem, including AR systems, AI pipelines, BLE navigation, and analytics infrastructure.',
    image: '/resource-tech.png',
    links: [
      { text: 'Download technical document', href: '#' }
    ]
  },
  {
    title: 'Research Thesis.',
    description: 'Read the comprehensive academic thesis detailing the implementation, learning outcomes, and evaluation of the intelligent museum exploration prototype.',
    image: '/resource-demo.png',
    links: [
      { text: 'Download thesis document', href: '#' }
    ]
  }
];

const ResourceHubSection: React.FC = () => {
  return (
    <section 
      id="resource-hub"
      style={{
        position: 'relative',
        padding: '12rem 0', // Massive whitespace
        backgroundColor: '#fbfbfd', // Apple light luxury background
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
            Built for <br/>
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

        {/* Media Showcase Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '3rem',
          alignItems: 'stretch'
        }}>
          {showcaseCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#ffffff',
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.02)',
                position: 'relative'
              }}
              className="group"
            >
              {/* Media Container with Zoom Effect */}
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                backgroundColor: '#f5f5f7'
              }}>
                <motion.img 
                  src={card.image} 
                  alt={card.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transformOrigin: 'center'
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
                
                {/* Subtle Inner Shadow overlay for premium feel */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)',
                  borderRadius: '32px 32px 0 0',
                  pointerEvents: 'none'
                }} />
              </div>

              {/* Text Content */}
              <div style={{
                padding: '3rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1
              }}>
                <h3 style={{
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                  color: '#1d1d1f'
                }}>
                  {card.title}
                </h3>
                
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.5,
                  color: '#86868b',
                  marginBottom: '2.5rem',
                  fontWeight: 500,
                  flexGrow: 1
                }}>
                  {card.description}
                </p>
                
                <div style={{
                  marginTop: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem'
                }}>
                  {card.links ? (
                    card.links.map((link, i) => (
                      <motion.a
                        key={i}
                        href={link.href}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                        style={{ 
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          color: '#0066cc',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          textDecoration: 'none'
                        }}
                      >
                        {link.text} <Download size={16} strokeWidth={2.5} />
                      </motion.a>
                    ))
                  ) : (
                    <motion.a
                      href={card.href}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                      style={{ 
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#0066cc',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        textDecoration: 'none'
                      }}
                    >
                      {card.cta} <span style={{ fontSize: '1.2em' }}>&rsaquo;</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceHubSection;
