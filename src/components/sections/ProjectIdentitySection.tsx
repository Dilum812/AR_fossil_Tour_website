import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Cpu, Bluetooth, Mic, BarChart, Gamepad2, Plus, X, User, Lightbulb, Eye, Map } from 'lucide-react';
import openaiIcon from '../../assets/openai.jpg';
import firebaseIcon from '../../assets/firebase.png';

const techStack = [
  {
    title: 'Augmented Reality',
    cardText: <>Immersive 3D fossil reconstruction using <span style={{ color: '#0066cc' }}>Unity AR.</span></>,
    icon: <Smartphone size={28} color="#0066cc" strokeWidth={2.5} />,
    approach: 'Our Unity-based AR engine overlays high-fidelity 3D models seamlessly onto physical fossils. It utilizes advanced computer vision for real-time skeletal tracking and environmental mapping.',
    impact: 'By visualizing ancient skeletons fleshed out in real-time, we bridge the gap between static artifacts and digital-native learners, massively increasing visual engagement.'
  },
  {
    title: 'Artificial Intelligence',
    cardText: <><span style={{ color: '#007aff' }}>OpenAI-powered</span> conversational robot guide.</>,
    icon: <Cpu size={28} color="#007aff" strokeWidth={2.5} />,
    approach: 'Powered by advanced Large Language Models, the robotic guide interprets natural language queries and generates dynamic, contextually accurate responses tailored to the specific exhibit.',
    impact: 'This transforms passive reading into active, conversational learning. Visitors can ask any question, at any depth, and receive immediate, personalized guidance.'
  },
  {
    title: 'Gamified Learning',
    cardText: <><span style={{ color: '#ff9500' }}>Interactive quizzes</span> and emotional storytelling.</>,
    icon: <Gamepad2 size={28} color="#ff9500" strokeWidth={2.5} />,
    approach: 'The platform integrates a progression system where visitors complete contextual mini-quizzes after exploring exhibits, unlocking digital badges and achievements along their journey.',
    impact: 'Gamification transforms observation into an active challenge. It motivates younger visitors to pay closer attention to details and significantly boosts long-term information retention.'
  },
  {
    title: 'Bluetooth Low Energy',
    cardText: <>ESP32 infrastructure for precise <span style={{ color: '#34c759' }}>indoor navigation.</span></>,
    icon: <Bluetooth size={28} color="#34c759" strokeWidth={2.5} />,
    approach: 'An intricate network of ESP32 BLE beacons tracks user location precisely throughout the museum, triggering context-aware content and AR experiences based on proximity.',
    impact: 'Visitors never have to manually search for information. The ecosystem naturally adapts to their physical location, providing a seamless, frictionless tour experience.'
  },
  {
    title: 'Voice Interaction',
    cardText: <><span style={{ color: '#af52de' }}>Natural language processing</span> for seamless chat.</>,
    icon: <Mic size={28} color="#af52de" strokeWidth={2.5} />,
    approach: 'Using robust speech-to-text and NLP pipelines, the system allows children to simply speak their questions aloud rather than typing, ensuring accessibility for all ages.',
    impact: 'Removing the barrier of text input makes the AI guide feel like a real companion. It encourages spontaneous curiosity and deeply natural interactions with the platform.'
  },
  {
    title: 'Firebase Analytics',
    cardText: <><span style={{ color: '#ff2d55' }}>Real-time SaaS dashboard</span> tracking user retention.</>,
    icon: <BarChart size={28} color="#ff2d55" strokeWidth={2.5} />,
    approach: 'A powerful cloud-based backend tracks visitor flow, exhibit dwell times, quiz performance, and user engagement metrics across the entire physical and digital ecosystem.',
    impact: 'Museum curators receive actionable data. They can identify which exhibits are succeeding, continuously optimize layouts, and prove educational ROI to stakeholders.'
  }
];

// Apple-style spring animation configuration
const springTransition = {
  duration: 1.2,
  ease: [0.16, 1, 0.3, 1] as const
} as any;

const ProjectIdentitySection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModal !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeModal]);

  return (
    <section
      id="platform"
      style={{
        position: 'relative',
        padding: '12rem 0',
        background: '#f5f5f7', // Apple light gray background
        overflow: 'hidden',
        borderTop: '1px solid rgba(0,0,0,0.05)'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Research Identity Header (Matches Image 1) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={springTransition}
          style={{ marginBottom: '8rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <span style={{ fontSize: '1.2rem', color: '#86868b', fontWeight: 600, marginBottom: '1rem' }}>
            Research Identity
          </span>
          <h2 style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: '#1d1d1f', marginBottom: '1.5rem', lineHeight: 1.05, fontWeight: 700, letterSpacing: '-0.04em' }}>
            An immersive <br />
            <span className="text-gradient-accent">educational platform.</span>
          </h2>
          <p style={{ color: '#1d1d1f', maxWidth: '800px', fontSize: '1.4rem', lineHeight: 1.5, fontWeight: 500 }}>
            Exploring the future of AI-powered museum experiences. The AR Fossil & Fauna Tour bridges the gap between static exhibits and digital-native learners.
          </p>
        </motion.div>

        {/* 2-Column Editorial Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '6rem',
          marginBottom: '10rem',
          alignItems: 'center'
        }}>

          {/* Left Panel: 2x2 Creator Identity Grid (Matches Image 2) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...springTransition, delay: 0.1 }}
              style={{ background: '#fff', borderRadius: '32px', padding: '2.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}
            >
              <User size={32} color="#1d1d1f" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#1d1d1f', marginBottom: '0.8rem', letterSpacing: '-0.02em' }}>Dilum Dissanayake</h4>
              <p style={{ color: '#86868b', fontSize: '1.1rem', lineHeight: 1.5 }}>Interactive Media Researcher</p>
              <img src="/sliit-logo.png" alt="SLIIT University" style={{ height: '64px', marginTop: '1.5rem', objectFit: 'contain', display: 'block' }} />
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...springTransition, delay: 0.2 }}
              style={{ background: '#fff', borderRadius: '32px', padding: '2.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}
            >
              <Lightbulb size={32} color="#1d1d1f" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#1d1d1f', marginBottom: '0.8rem', letterSpacing: '-0.02em' }}>Research Focus</h4>
              <p style={{ color: '#86868b', fontSize: '1.1rem', lineHeight: 1.5 }}>AR Systems Design, AI Learning Experiences, and Museum Technology Innovation.</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...springTransition, delay: 0.3 }}
              style={{ background: '#fff', borderRadius: '32px', padding: '2.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}
            >
              <Eye size={32} color="#1d1d1f" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#1d1d1f', marginBottom: '0.8rem', letterSpacing: '-0.02em' }}>The Vision</h4>
              <p style={{ color: '#86868b', fontSize: '1.1rem', lineHeight: 1.5 }}>"Transforming static fossil exhibits into emotionally engaging educational experiences."</p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...springTransition, delay: 0.4 }}
              style={{ background: '#fff', borderRadius: '32px', padding: '2.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}
            >
              <Map size={32} color="#1d1d1f" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#1d1d1f', marginBottom: '0.8rem', letterSpacing: '-0.02em' }}>AR Fossil & Fauna</h4>
              <p style={{ color: '#86868b', fontSize: '1.1rem', lineHeight: 1.5 }}>Reviving prehistoric Sri Lanka through immersive educational technology.</p>
            </motion.div>
          </div>

          {/* Right Panel: Vertical Tech Stack (Matches Image 3) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4rem',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem 0'
            }}
          >
            {/* Tech Item 1: Icon + Text */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                <img src="/unity-logo.png" alt="Unity" style={{ height: '40px', objectFit: 'contain' }} />
              </div>
              <p style={{ fontSize: '1.3rem', color: '#1d1d1f', fontWeight: 500 }}>Unity AR Engine</p>
            </div>

            {/* Tech Item 2: OpenAI Logo + Text */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                <img src={openaiIcon} alt="OpenAI" style={{ height: '50px', objectFit: 'contain' }} />
              </div>
              <p style={{ fontSize: '1.3rem', color: '#1d1d1f', fontWeight: 500 }}>OpenAI GPT & Whisper</p>
            </div>

            {/* Tech Item 3: Massive Number + Text */}
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.1rem', color: '#1d1d1f', fontWeight: 500, marginBottom: '0.5rem' }}>Up to</p>
              <h3 style={{ fontSize: '4rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 1rem 0', letterSpacing: '-0.04em', lineHeight: 1 }}>24 hrs</h3>
              <p style={{ fontSize: '1.1rem', color: '#1d1d1f', fontWeight: 400 }}>ESP32 BLE Battery life</p>
            </div>

            {/* Tech Item 4: Firebase Logo + Text */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                <img src={firebaseIcon} alt="Firebase" style={{ height: '40px', objectFit: 'contain' }} />
              </div>
              <p style={{ fontSize: '1.1rem', color: '#1d1d1f', fontWeight: 400, maxWidth: '250px', margin: '0 auto' }}>
                Firebase Analytics tracking for museum curators
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Technologies 3-Column Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            style={{ fontSize: '3rem', marginBottom: '3rem', letterSpacing: '-0.04em' }}
          >
            Core technologies.
          </motion.h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '24px',
          }}>
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                onClick={() => setActiveModal(index)}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...springTransition, delay: index * 0.05 }}
                style={{
                  background: '#ffffff',
                  borderRadius: '32px',
                  padding: '2.5rem',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                  minHeight: '280px',
                  border: '1px solid rgba(0,0,0,0.04)',
                  cursor: 'pointer',
                }}
              >
                <div style={{ marginBottom: '1.5rem' }}>
                  {tech.icon}
                </div>
                <h4 style={{
                  fontSize: '1.8rem',
                  color: '#1d1d1f',
                  fontWeight: 600,
                  lineHeight: 1.2,
                  letterSpacing: '-0.03em',
                  marginTop: 'auto',
                  marginBottom: '2rem'
                }}>
                  {tech.cardText}
                </h4>

                {/* Apple-style black plus button */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '24px',
                    right: '24px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#1d1d1f',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none' // Let the card handle the click entirely
                  }}
                >
                  <Plus color="#ffffff" size={20} strokeWidth={3} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Global Modal Overlay */}
      <AnimatePresence>
        {activeModal !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              padding: '2rem'
            }}
            onClick={() => setActiveModal(null)}
          >
            {/* Prevent clicks inside modal from closing it */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                width: '100%',
                maxWidth: '650px',
                background: '#ffffff',
                borderRadius: '32px',
                padding: '3rem',
                position: 'relative',
                boxShadow: '0 40px 100px rgba(0,0,0,0.2)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#1d1d1f',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#424245'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#1d1d1f'}
              >
                <X color="#ffffff" size={16} strokeWidth={3} />
              </button>

              <h3 style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#1d1d1f',
                marginBottom: '2rem',
                letterSpacing: '-0.04em'
              }}>
                {techStack[activeModal].title}
              </h3>

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1d1d1f', marginBottom: '0.5rem' }}>
                  Our approach.
                </h4>
                <p style={{ color: '#1d1d1f', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  {techStack[activeModal].approach}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1d1d1f', marginBottom: '0.5rem' }}>
                  The impact.
                </h4>
                <p style={{ color: '#1d1d1f', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  {techStack[activeModal].impact}
                </p>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectIdentitySection;
