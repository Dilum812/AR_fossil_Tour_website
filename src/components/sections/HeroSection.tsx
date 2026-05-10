import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Apple } from 'lucide-react';
import logoImg from '../../assets/Ar fossil tour logo.png';
import faviconImg from '../../assets/favicon.png';

const CustomCursor = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '28px',
        height: '28px',
        pointerEvents: 'none',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      animate={{
        x: mousePos.x - 4, // Shifted to make top-left the point
        y: mousePos.y - 4,
        rotate: -15
      }}
      transition={{
        type: 'spring',
        damping: 35,
        stiffness: 300,
        mass: 0.4
      }}
    >
      <img src={faviconImg} alt="Cursor Icon" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </motion.div>
  );
};

const HeroSection: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacityContent = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scaleContent = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <section 
      ref={ref}
      style={{
        position: 'relative',
        height: '100vh',
        background: '#ffffff',
        overflow: 'hidden'
      }}
    >
      <CustomCursor />
      <motion.div 
        style={{ 
          position: 'relative',
          zIndex: 10,
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          opacity: opacityContent,
          scale: scaleContent
        }}
      >
        {/* Antigravity-style Badge with Icon Only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            marginBottom: '3.5rem'
          }}
        >
          <img src={faviconImg} alt="Favicon Icon" style={{ height: '48px', width: 'auto' }} />
        </motion.div>

        {/* Massive Centered Headline */}
        <motion.h1
          style={{
            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
            fontWeight: 800,
            color: '#1d1d1f',
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            maxWidth: '1100px',
            marginBottom: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* First Line */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {"Reviving the".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.2 + (i * 0.03),
                  ease: [0.215, 0.61, 0.355, 1] 
                }}
                style={{ display: 'inline-block', whiteSpace: 'pre' }}
              >
                {char}
              </motion.span>
            ))}
          </div>
          
          {/* Second Line */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} className="text-gradient-accent">
            {"Lost Wilderness.".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.8 + (i * 0.04), // Delay so it starts after first line
                  ease: [0.215, 0.61, 0.355, 1] 
                }}
                style={{ display: 'inline-block', whiteSpace: 'pre' }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
            color: '#86868b',
            maxWidth: '700px',
            marginBottom: '4rem',
            lineHeight: 1.5,
            fontWeight: 500
          }}
        >
          Transforming static fossil exhibits into intelligent augmented reality learning experiences through spatial computing.
        </motion.p>

        <motion.div
          style={{
            position: 'absolute',
            bottom: '3rem',
            left: 0,
            width: '100%',
            color: '#1d1d1f',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            zIndex: 30
          }}
        >
          <span style={{ fontSize: '1.1rem', fontWeight: 500, letterSpacing: '-0.01em', opacity: 0.6 }}>Scroll to Explore</span>
          <div style={{ position: 'relative', height: '60px', width: '1px', background: 'rgba(0,0,0,0.1)' }}>
            <motion.div
              animate={{ y: [0, 60], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '1px',
                height: '30px',
                background: '#1d1d1f'
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
