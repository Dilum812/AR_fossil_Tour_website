import React from 'react';
import { motion } from 'framer-motion';

const FooterSection: React.FC = () => {
  const columnStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.2rem',
  };

  const titleStyle = {
    color: '#ffffff',
    fontSize: '0.85rem',
    fontWeight: 600,
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    marginBottom: '0.5rem',
  };

  const linkStyle = {
    color: '#86868b',
    fontSize: '1rem',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  };

  return (
    <footer style={{
      position: 'relative',
      backgroundColor: '#000000',
      color: '#f5f5f7',
      padding: '8rem 0 3rem 0',
      overflow: 'hidden',
    }}>
      {/* Background Ambient Glow */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100vw',
        height: '500px',
        background: 'radial-gradient(circle at top, rgba(0, 102, 204, 0.15) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Top Area: Large Editorial Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '6rem', maxWidth: '800px' }}
        >
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            color: '#ffffff'
          }}>
            Shaping the Future of <br/>
            <span className="text-gradient-accent">Immersive Educational Experiences.</span>
          </h2>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: 1.6,
            color: '#86868b',
            fontWeight: 500,
            maxWidth: '650px'
          }}>
            AR Fossil & Fauna Tour explores how augmented reality, artificial intelligence, and interactive storytelling can redefine museum learning through emotionally engaging digital experiences.
          </p>
        </motion.div>

        {/* Middle Area: Clean Multi-column Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '4rem',
            marginBottom: '6rem'
          }}
        >
          {/* Column 01 — PROJECT */}
          <div style={columnStyle}>
            <span style={titleStyle}>Project</span>
            <motion.a whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>Home</motion.a>
            <motion.a whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>Solution Overview</motion.a>
            <motion.a whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>Research & Validation</motion.a>
            <motion.a whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>Commercialization</motion.a>
            <motion.a whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>Resources</motion.a>
            <motion.a whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>Contact</motion.a>
          </div>

          {/* Column 02 — TECHNOLOGY */}
          <div style={columnStyle}>
            <span style={titleStyle}>Technology</span>
            <motion.a whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>Unity AR Foundation</motion.a>
            <motion.a whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>OpenAI GPT</motion.a>
            <motion.a whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>Whisper AI</motion.a>
            <motion.a whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>Firebase Analytics</motion.a>
            <motion.a whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>ESP32 BLE</motion.a>
            <motion.a whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>AI Voice Systems</motion.a>
          </div>

          {/* Column 03 — RESEARCH */}
          <div style={columnStyle}>
            <span style={titleStyle}>Research</span>
            <motion.a whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>Proposal Document</motion.a>
            <motion.a whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>Technical Documentation</motion.a>
            <motion.a whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>Demonstration Video</motion.a>
            <motion.a whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>Research Findings</motion.a>
            <motion.a whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>Prototype System</motion.a>
          </div>

          {/* Column 04 — CONNECT */}
          <div style={columnStyle}>
            <span style={titleStyle}>Connect</span>
            <motion.a whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>Email</motion.a>
            <motion.a whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>LinkedIn</motion.a>
            <motion.a whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>GitHub</motion.a>
            <motion.a whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>Portfolio</motion.a>
            <motion.a whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>Research Contact</motion.a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <p style={{ color: '#86868b', fontSize: '0.9rem', fontWeight: 400 }}>
            © 2026 Dissanayake D.M.D.T — Immersive Technology Research Platform.
          </p>
          <p style={{ color: '#424245', fontSize: '0.85rem', fontWeight: 400 }}>
            Designed for the future of museum interaction.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
