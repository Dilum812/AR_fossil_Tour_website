import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Users, Gamepad2, ArrowRight, ChevronUp, ChevronDown, X } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "AR Fossil Reconstruction",
    desc: "Watch ancient skeletons flesh out in real-time. Our Unity-based AR engine overlays high-fidelity 3D models seamlessly onto physical fossils.",
    image: '/feature-ar.png',
    hasImage: true
  },
  {
    id: 2,
    title: "AI Robot Guide",
    desc: "Powered by advanced language models, the robotic guide answers dynamic questions, offering a deeply conversational and engaging tour experience.",
    image: '/feature-ai.png',
    hasImage: true
  },
  {
    id: 3,
    title: "BLE Smart Navigation",
    desc: "An intricate network of ESP32 BLE beacons tracks user location precisely, triggering context-aware content as visitors approach different exhibits.",
    image: '/feature-nav.png',
    hasImage: true
  },
  {
    id: 4,
    title: "Voice Interaction",
    desc: "Natural Language Processing allows children to simply speak their questions aloud. The system interprets intent and provides instantaneous, accurate vocal responses.",
    hasImage: false,
    diagram: () => (
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '20%', background: 'radial-gradient(circle at 70% center, rgba(0,102,204,0.05) 0%, transparent 60%)' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', height: '200px' }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
            <motion.div key={i} animate={{ height: ['10%', '100%', '10%'] }} transition={{ duration: 0.8 + Math.random(), repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }} style={{ width: '12px', background: 'var(--accent-blue)', borderRadius: '6px', boxShadow: '0 0 20px rgba(0,102,204,0.3)' }} />
          ))}
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Adaptive Learning Personas",
    desc: "The system identifies the user's age and comprehension level, dynamically adjusting the complexity and tone of the information delivered.",
    hasImage: false,
    diagram: () => (
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '20%', background: 'radial-gradient(circle at 70% center, rgba(0,122,255,0.05) 0%, transparent 70%)' }}>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} style={{ width: '100px', height: '100px', borderRadius: '50%', border: '2px dashed rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Users size={32} color="rgba(0,0,0,0.3)" /></motion.div>
          <ArrowRight color="rgba(0,0,0,0.2)" size={32} />
          <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} style={{ width: '160px', height: '160px', borderRadius: '50%', border: '2px solid var(--accent-cyan)', background: 'rgba(0, 122, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 40px rgba(0,122,255,0.1)' }}><Users size={64} color="var(--accent-blue)" /></motion.div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Gamified Learning",
    desc: "Transforming observation into an active challenge. Visitors complete mini-quizzes after exhibits to unlock achievements and digital badges.",
    hasImage: false,
    diagram: () => (
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '20%', background: 'radial-gradient(circle at 70% center, rgba(0,102,204,0.05) 0%, transparent 60%)' }}>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ width: '350px', height: '350px', border: '2px dashed rgba(0,102,204,0.3)', borderRadius: '50%', position: 'absolute' }} />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ width: '280px', height: '280px', border: '2px solid rgba(0,0,0,0.05)', borderRadius: '50%', position: 'absolute' }} />
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: '140px', height: '140px', background: 'var(--accent-blue)', borderRadius: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 40px rgba(0,102,204,0.3)', position: 'relative', zIndex: 2 }}>
            <Gamepad2 size={64} color="#fff" />
          </motion.div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "Emotional Storytelling",
    desc: "We don't just state facts; we tell the dramatic story of survival. The AI weaves engaging narratives that connect children to prehistoric life.",
    image: '/feature-story.png',
    hasImage: true
  },
  {
    id: 8,
    title: "Research Analytics",
    desc: "A powerful SaaS dashboard for museum curators tracks visitor flow, dwell times, and quiz performance to continuously optimize the exhibit layout.",
    hasImage: false,
    diagram: () => (
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingLeft: '20%', paddingBottom: '100px', gap: '20px', background: 'linear-gradient(180deg, transparent 0%, rgba(0,102,204,0.05) 100%)' }}>
        {[40, 70, 50, 90, 60, 80, 100, 60, 85].map((h, i) => (
          <motion.div key={i} animate={{ height: [`${h * 0.5}%`, `${h}%`, `${h * 0.5}%`] }} transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }} style={{ width: '40px', background: 'linear-gradient(180deg, var(--accent-blue) 0%, rgba(0,102,204,0) 100%)', borderRadius: '8px 8px 0 0', border: '1px solid rgba(0,102,204,0.2)', borderBottom: 'none' }} />
        ))}
      </div>
    )
  }
];

const FeaturePill = ({ feature, isActive, onClick }: { feature: any, isActive: boolean, onClick: () => void }) => {
  return (
    <motion.div
      layout
      onClick={onClick}
      style={{
        background: isActive ? 'rgba(255, 255, 255, 0.7)' : '#f0f0f2',
        backdropFilter: isActive ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isActive ? 'blur(20px)' : 'none',
        border: isActive ? '1px solid rgba(255,255,255,0.4)' : '1px solid transparent',
        borderRadius: isActive ? '24px' : '30px',
        padding: isActive ? '1.5rem' : '10px 20px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        overflow: 'hidden',
        color: '#1d1d1f',
        width: isActive ? '380px' : 'fit-content',
        boxShadow: isActive ? '0 10px 30px rgba(0,0,0,0.1)' : 'none',
        zIndex: isActive ? 10 : 1
      }}
      whileHover={!isActive ? { backgroundColor: '#e8e8ed' } : {}}
      transition={{ layout: { type: "spring", stiffness: 300, damping: 30 } }}
    >
      <motion.div layout style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {!isActive && (
          <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1.5px solid #1d1d1f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Plus size={14} color="#1d1d1f" strokeWidth={3} />
          </div>
        )}
        {isActive && (
          <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'transparent' }} /> // Spacer to align text slightly, or just omit. The screenshot shows no icon when active.
        )}
        <span style={{ 
          fontWeight: 600, 
          fontSize: isActive ? '0.95rem' : '0.95rem', // Text size doesn't change much in the screenshot, it just becomes part of the paragraph
          color: '#1d1d1f',
          display: isActive ? 'none' : 'block' // Hide the standalone title when active, it's rendered inside the paragraph
        }}>
          {feature.title}
        </span>
      </motion.div>
      
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p style={{ color: '#1d1d1f', fontSize: '0.95rem', lineHeight: 1.5, letterSpacing: '-0.01em' }}>
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
      id="technology"
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
          Take a closer look.
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
                {feature.hasImage ? (
                  <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url(${feature.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }} />
                ) : (
                  feature.diagram && feature.diagram()
                )}
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
