import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ChevronUp, ChevronDown, X } from 'lucide-react';
import o1Img from '../../assets/o1.jpeg';
import o2Img from '../../assets/o2.jpeg';
import o3Img from '../../assets/o3.jpeg';
import o4Img from '../../assets/o4.jpeg';
import o5Img from '../../assets/o5.jpeg';
import o6Img from '../../assets/o6.jpeg';
import o7Img from '../../assets/o7.jpeg';

const features = [
  {
    id: 1,
    title: "AR Fossil Reconstruction",
    desc: "Watch ancient skeletons flesh out in real-time. Our Unity-based AR engine overlays high-fidelity 3D models seamlessly onto physical fossils.",
    image: o1Img,
    hasImage: true
  },
  {
    id: 2,
    title: "AI Robot Guide",
    desc: "Powered by advanced language models, the robotic guide answers dynamic questions, offering a deeply conversational and engaging tour experience.",
    image: o2Img,
    hasImage: true
  },
  {
    id: 3,
    title: "BLE Smart Navigation",
    desc: "An intricate network of ESP32 BLE beacons tracks user location precisely, triggering context-aware content as visitors approach different exhibits.",
    image: o3Img,
    hasImage: true
  },
  {
    id: 4,
    title: "Voice Interaction",
    desc: "Natural Language Processing allows children to simply speak their questions aloud. The system interprets intent and provides instantaneous, accurate vocal responses.",
    image: o4Img,
    hasImage: true
  },
  {
    id: 5,
    title: "Adaptive Learning Personas",
    desc: "The system identifies the user's age and comprehension level, dynamically adjusting the complexity and tone of the information delivered.",
    image: o5Img,
    hasImage: true
  },
  {
    id: 6,
    title: "Gamified Learning",
    desc: "Transforming observation into an active challenge. Visitors complete mini-quizzes after exhibits to unlock achievements and digital badges.",
    image: o6Img,
    hasImage: true
  },
  {
    id: 7,
    title: "Emotional Storytelling",
    desc: "We don't just state facts; we tell the dramatic story of survival. The AI weaves engaging narratives that connect children to prehistoric life.",
    image: o7Img,
    hasImage: true
  },

];

const FeaturePill = ({ feature, isActive, onClick }: { feature: any, isActive: boolean, onClick: () => void }) => {
  return (
    <motion.div
      layout
      onClick={onClick}
      style={{
        background: isActive ? '#e8e8ed' : '#f0f0f2',
        borderRadius: isActive ? '20px' : '100px',
        padding: isActive ? '1.5rem' : '12px 20px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        overflow: 'hidden',
        color: '#1d1d1f',
        width: isActive ? '340px' : 'fit-content',
        boxShadow: 'none',
        zIndex: isActive ? 10 : 1,
        margin: 0
      }}
      whileHover={!isActive ? { backgroundColor: '#e8e8ed' } : {}}
      transition={{ layout: { type: "spring", stiffness: 400, damping: 30 } }}
    >
      <AnimatePresence mode="popLayout">
        {!isActive ? (
          <motion.div
            key="inactive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', whiteSpace: 'nowrap' }}
          >
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1.5px solid #86868b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Plus size={14} color="#1d1d1f" strokeWidth={2.5} />
            </div>
            <span style={{ fontWeight: 600, fontSize: '0.95rem', color: '#1d1d1f' }}>
              {feature.title}
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            style={{ width: '100%' }}
          >
            <p style={{ color: '#1d1d1f', fontSize: '0.95rem', lineHeight: 1.5, letterSpacing: '-0.01em', margin: 0 }}>
              <span style={{ fontWeight: 700 }}>{feature.title}. </span> {feature.desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const SolutionOverviewSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  return (
    <section
      id="solution"
      style={{
        padding: '6rem 0',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'var(--bg-primary)',
        borderTop: '1px solid rgba(0,0,0,0.05)'
      }}
    >
      {/* Section Title */}
      <div style={{ width: '100%', maxWidth: '1400px', padding: '0 5vw', marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          color: 'var(--text-primary)'
        }}>
          The Future of Museum Learning.
        </h2>
      </div>

      {/* Main Cinematic Apple-Style Container */}
      <div style={{
        width: '90vw',
        maxWidth: '1400px',
        height: '80vh',
        minHeight: '700px',
        background: '#f5f5f7', // Apple's #f5f5f7
        borderRadius: '40px',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }}>

        {/* Background Visuals (Right aligned or full cover based on image) */}
        <AnimatePresence mode="wait">
          {features.map((feature, index) => {
            if (index !== activeIndex) return null;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1] // Apple's signature expo-out curve
                }}
                style={{ position: 'absolute', inset: 0, zIndex: 0 }}
              >
                {(feature as any).hasImage ? (
                  <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url(${(feature as any).image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }} />
                ) : null}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Close Button (Top Right) */}
        <button style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(10px)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 20,
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <X size={18} color="#1d1d1f" strokeWidth={2.5} />
        </button>

        {/* Floating Navigation Overlay */}
        <div style={{
          position: 'relative',
          paddingLeft: '6rem', // Room for the up/down arrows
          zIndex: 10,
          height: '100%',
          display: 'flex',
          alignItems: 'center'
        }}>

          {/* Up/Down Arrows */}
          <div style={{
            position: 'absolute',
            left: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <button
              onClick={handlePrev}
              style={{
                width: '36px', height: '36px',
                borderRadius: '50%',
                background: '#f0f0f2',
                border: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#1d1d1f', transition: 'background 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#e8e8ed'}
              onMouseLeave={e => e.currentTarget.style.background = '#f0f0f2'}
            >
              <ChevronUp size={18} strokeWidth={2.5} />
            </button>
            <button
              onClick={handleNext}
              style={{
                width: '36px', height: '36px',
                borderRadius: '50%',
                background: '#f0f0f2',
                border: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#1d1d1f', transition: 'background 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#e8e8ed'}
              onMouseLeave={e => e.currentTarget.style.background = '#f0f0f2'}
            >
              <ChevronDown size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* Accordion Pills */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}>
            {features.map((feature, i) => (
              <FeaturePill
                key={feature.id}
                feature={feature}
                isActive={activeIndex === i}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default SolutionOverviewSection;
