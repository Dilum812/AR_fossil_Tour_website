import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const researchData = [
  {
    id: 'learning',
    tabLabel: 'Learning Improvement',
    statistic: '40.6% Improvement in Knowledge Retention.',
    description: 'The AR learning system significantly improved educational performance compared to traditional printed-label museum experiences.',
    gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)', // Soft elegant purple-blue
  },
  {
    id: 'engagement',
    tabLabel: 'Visitor Engagement',
    statistic: 'Extended Interaction & Active Participation.',
    description: 'Firebase interaction logs revealed significantly higher engagement durations and repeated interaction patterns across AR experiences.',
    gradient: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)', // Clean minimal white/gray
  },
  {
    id: 'navigation',
    tabLabel: 'Smart Navigation',
    statistic: 'Improved Indoor Exhibit Discovery.',
    description: 'The BLE-powered discovery system enabled users to navigate museum environments efficiently using proximity-based interactive guidance.',
    gradient: 'linear-gradient(to top, #accbee 0%, #e7f0fd 100%)', // Smooth tech blue
  },
  {
    id: 'interactive',
    tabLabel: 'Interactive Learning',
    statistic: 'Adaptive Educational Experiences.',
    description: 'The platform dynamically adjusted educational complexity using AI-driven learning personas and conversational interactions.',
    gradient: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', // Premium industrial gray
  },
  {
    id: 'analytics',
    tabLabel: 'Research Analytics',
    statistic: 'Real-Time Behavioral Research Data.',
    description: 'The platform continuously recorded anonymized interaction patterns to evaluate engagement, learning effectiveness, and navigation behavior.',
    gradient: 'linear-gradient(to right, #434343 0%, #000000 100%)', // Deep dark analytical
  },
  {
    id: 'comparative',
    tabLabel: 'Comparative Results',
    statistic: 'Immersive Technology Outperformed Traditional Methods.',
    description: 'Research findings demonstrated measurable improvements in engagement, learning retention, and visitor interaction through immersive AR experiences.',
    gradient: 'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)', // Validated green
  }
];

const ResearchValidationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section style={{
      padding: '8rem 0 10rem 0',
      background: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '1000px' }}>
          <span style={{ fontSize: '1.1rem', color: '#86868b', fontWeight: 600, marginBottom: '1.2rem', display: 'block' }}>
            Performance Metrics
          </span>
          <h2 style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', color: '#1d1d1f', marginBottom: '1.8rem', lineHeight: 1.05, fontWeight: 700, letterSpacing: '-0.04em' }}>
            Research & Validation.
          </h2>
          <p style={{ color: '#1d1d1f', fontSize: '1.4rem', lineHeight: 1.5, fontWeight: 600, maxWidth: '850px', margin: '0 auto', letterSpacing: '-0.01em' }}>
            Quantitative analysis and real-world interaction data validating the effectiveness of immersive educational technologies.
          </p>
        </div>

        {/* Massive Cinematic Image Panel */}
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          aspectRatio: '16/9',
          borderRadius: '40px', // Massive Apple rounding
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 30px 60px rgba(0,0,0,0.08)',
          backgroundColor: '#f5f5f7'
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // Smooth Apple easing
              style={{
                position: 'absolute',
                inset: 0,
                background: researchData[activeTab].gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Optional: Slight light overlay for premium depth */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.05) 100%)',
                pointerEvents: 'none'
              }} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pill Navigation (Continuity Style) */}
        <div style={{
          marginTop: '2.5rem',
          marginBottom: '3rem',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          overflowX: 'auto', // Allow scrolling on very small screens
          padding: '0 1rem',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
          <div style={{
            display: 'inline-flex',
            background: '#f5f5f7',
            padding: '6px',
            borderRadius: '40px',
            gap: '4px'
          }}>
            {researchData.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '30px',
                  border: 'none',
                  background: activeTab === index ? '#1d1d1f' : 'transparent',
                  color: activeTab === index ? '#fff' : '#1d1d1f',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  whiteSpace: 'nowrap'
                }}
              >
                {tab.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Text (Statistic & Description) */}
        <div style={{
          textAlign: 'center',
          maxWidth: '800px',
          minHeight: '120px' // Prevent layout jumping during cross-fades
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 style={{
                fontSize: '1.4rem', // Matching exact screenshot sizing hierarchy
                fontWeight: 600,
                color: '#1d1d1f',
                marginBottom: '0.5rem',
                letterSpacing: '-0.01em'
              }}>
                {researchData[activeTab].statistic}
              </h3>
              <p style={{
                fontSize: '1.15rem',
                color: '#86868b',
                lineHeight: 1.5,
                fontWeight: 500
              }}>
                {researchData[activeTab].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ResearchValidationSection;
