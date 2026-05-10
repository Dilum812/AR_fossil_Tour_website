import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import arunaImg from '../../assets/aruna.jpeg';
import nushkanImg from '../../assets/nushkan.jpeg';
import developerImg from '../../assets/Profile.jpeg';

const team = [
  {
    name: "Mr. Aruna Ishara Gamage",
    role: "Supervisor",
    image: arunaImg
  },
  {
    name: "Mr. Nushkan Nizmi",
    role: "Co-Supervisor",
    image: nushkanImg
  },
  {
    name: "Dilum Dissanayake",
    role: "Developer / Interactive Media Researcher",
    image: developerImg
  }
];

const CoreTeamSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="team"
      style={{
        background: '#fff',
        padding: '12rem 0',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div style={{ maxWidth: '1400px', width: '100%', padding: '0 10vw', position: 'relative', zIndex: 2 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#86868b',
            marginBottom: '4rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            textAlign: 'center'
          }}
        >
          Core Team
        </motion.p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {team.map((member, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                position: 'relative',
                cursor: 'pointer',
                padding: '2rem 0',
                borderBottom: '1px solid rgba(0,0,0,0.05)',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Smaller Portrait Reveal directly above the name */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: -180 // Positions it directly above the centered name
                    }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    style={{
                      position: 'absolute',
                      width: '180px',
                      height: '220px',
                      zIndex: 4,
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      pointerEvents: 'none',
                      left: '50%',
                      marginLeft: '-90px' // Center the 180px wide image
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                animate={{
                  opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.3 : 1,
                  filter: hoveredIndex !== null && hoveredIndex !== index ? 'blur(8px)' : 'blur(0px)',
                  scale: hoveredIndex === index ? 1.05 : 1
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'relative', zIndex: 5, textAlign: 'center' }}
              >
                <h2 style={{
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.05em',
                  margin: 0,
                  lineHeight: 0.9,
                  background: hoveredIndex === index
                    ? 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #f97316)'
                    : '#1d1d1f',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: hoveredIndex === index ? 'transparent' : 'inherit',
                  transition: 'all 0.6s ease'
                }}>
                  {member.name}
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: '#86868b',
                  marginTop: '0.8rem',
                  letterSpacing: '-0.01em'
                }}>
                  {member.role}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Background Element */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, rgba(0,102,204,0.02) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
    </section>
  );
};

export default CoreTeamSection;
