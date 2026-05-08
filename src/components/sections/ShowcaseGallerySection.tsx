import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const showcaseItems = [
  {
    id: 1,
    title: 'Bring Extinct Creatures Back to Life.',
    description: 'Static fossil exhibits are transformed into interactive augmented reality experiences, allowing visitors to visualize prehistoric Sri Lankan wildlife in full scale and motion.',
    gradient: 'linear-gradient(135deg, #1d2b64 0%, #f8cdda 100%)',
    width: 'clamp(350px, 55vw, 900px)'
  },
  {
    id: 2,
    title: 'An Intelligent Museum Companion.',
    description: 'The AI-powered robot guide narrates exhibit information, adapts explanations based on age groups, and creates emotionally engaging educational interactions.',
    gradient: 'radial-gradient(circle at 20% 50%, #0f2027, #203a43, #2c5364)',
    width: 'clamp(300px, 45vw, 700px)'
  },
  {
    id: 3,
    title: 'Navigate Through Discovery.',
    description: 'ESP32 BLE beacon infrastructure transforms museum exploration into an interactive discovery experience using audio, haptic, and proximity-based guidance.',
    gradient: 'linear-gradient(to top right, #000000, #434343)',
    width: 'clamp(300px, 45vw, 700px)'
  },
  {
    id: 4,
    title: 'Natural Voice Communication.',
    description: 'Integrated Whisper AI speech recognition and OpenAI voice synthesis allow visitors to communicate naturally with the intelligent museum assistant.',
    gradient: 'linear-gradient(135deg, #2b5876 0%, #4e4376 100%)',
    width: 'clamp(400px, 60vw, 1000px)'
  },
  {
    id: 5,
    title: 'Learning Tailored to Every Visitor.',
    description: 'The platform dynamically adjusts narration complexity, vocabulary, and educational tone to create personalized learning experiences for different age groups.',
    gradient: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
    width: 'clamp(350px, 50vw, 850px)'
  },
  {
    id: 6,
    title: 'Gamified Educational Interaction.',
    description: 'Interactive AI-generated quizzes encourage participation, improve knowledge retention, and sustain visitor engagement throughout the museum journey.',
    gradient: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
    width: 'clamp(300px, 40vw, 650px)'
  },
  {
    id: 7,
    title: 'Explore Beyond Observation.',
    description: 'Visitors can physically interact with life-sized augmented reality reconstructions using intuitive touch gestures and immersive spatial interaction.',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    width: 'clamp(350px, 55vw, 900px)'
  },
  {
    id: 8,
    title: 'Data-Driven Educational Research.',
    description: 'The system continuously records interaction patterns, quiz performance, and engagement metrics to evaluate educational effectiveness and visitor behavior.',
    gradient: 'radial-gradient(circle at 80% 20%, #141e30, #243b55)',
    width: 'clamp(350px, 50vw, 850px)'
  }
];

const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1
};

const ShowcaseGallerySection: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -window.innerWidth * 0.5, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: window.innerWidth * 0.5, behavior: 'smooth' });
    }
  };

  return (
    <section 
      style={{
        position: 'relative',
        background: '#fff', // Pristine white background for gallery area
        overflow: 'hidden',
      }}
    >
      {/* Immersive Dark Hero Header (macOS 'Smooth operator' style) */}
      <div style={{
        position: 'relative',
        padding: '12rem 2rem 14rem 2rem',
        background: 'linear-gradient(135deg, #1b0f38 0%, #254d74 50%, #307a6a 100%)', // Deep purple to blue to green
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {/* Abstract blurred shapes imitating the "Liquid Glass" depth */}
        <div style={{
           position: 'absolute', width: '50vw', height: '50vw', background: 'rgba(120, 80, 255, 0.3)', filter: 'blur(100px)', borderRadius: '50%', top: '-20%', left: '-10%'
        }} />
        <div style={{
           position: 'absolute', width: '60vw', height: '60vw', background: 'rgba(80, 200, 180, 0.25)', filter: 'blur(120px)', borderRadius: '50%', bottom: '-30%', right: '-15%'
        }} />
        <div style={{
           position: 'absolute', width: '40vw', height: '150%', background: 'rgba(0, 0, 0, 0.2)', filter: 'blur(60px)', top: 0, left: '30%', transform: 'skewX(-15deg)'
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', zIndex: 10, maxWidth: '800px' }}
        >
          <span style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600, marginBottom: '1.5rem', display: 'block', letterSpacing: '0.02em' }}>
            Visual Showcase
          </span>
          <h2 style={{ fontSize: 'clamp(4rem, 8vw, 6.5rem)', color: '#fff', marginBottom: '1.5rem', lineHeight: 1.05, fontWeight: 700, letterSpacing: '-0.04em' }}>
            Immersive Learning <br/> in Motion.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.25rem', lineHeight: 1.6, fontWeight: 500, maxWidth: '600px', margin: '0 auto' }}>
            Explore how augmented reality, artificial intelligence, and interactive storytelling transform static fossil exhibits into living educational experiences.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Gallery */}
      <div style={{ position: 'relative', paddingTop: '6rem' }}>
        <style>{`
          .gallery-container::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        <div 
          ref={galleryRef}
          className="gallery-container"
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            padding: '0 5vw 4rem 5vw',
            gap: '2.5rem',
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE
            alignItems: 'stretch'
          }}
        >
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...springTransition, delay: index * 0.1 }}
              style={{
                flex: '0 0 clamp(320px, 40vw, 750px)',
                scrollSnapAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}
            >
              {/* Media Container */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: '100%',
                  aspectRatio: '4/3', // Consistent media height ratio
                  background: item.gradient,
                  borderRadius: '40px', // Massive Apple rounding
                  boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer'
                }}
              >
                {/* Simulated playback UI / glass effect overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.2) 100%)',
                  pointerEvents: 'none'
                }} />
              </motion.div>

              {/* Editorial Text */}
              <div style={{ padding: '0 1rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#1d1d1f', marginBottom: '0.8rem', letterSpacing: '-0.02em', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ color: '#86868b', fontSize: '1.1rem', lineHeight: 1.5, fontWeight: 500 }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 5vw', gap: '1rem', marginTop: '1rem' }}>
          <button 
            onClick={scrollLeft}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.05)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#1d1d1f'
            }}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={scrollRight}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.05)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#1d1d1f'
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ShowcaseGallerySection;
