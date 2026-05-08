import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FloatingFragments = () => {
  const fragments = Array.from({ length: 25 });
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
      {fragments.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0,
          }}
          animate={{
            y: [0, Math.random() * -200 - 50],
            x: [0, (Math.random() - 0.5) * 150],
            rotate: [0, Math.random() * 360],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
          style={{
            position: 'absolute',
            width: Math.random() * 4 + 1 + 'px',
            height: Math.random() * 4 + 1 + 'px',
            background: i % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-blue)',
            boxShadow: `0 0 ${Math.random() * 10 + 5}px var(--accent-glow)`,
            borderRadius: Math.random() > 0.5 ? '50%' : '1px',
            willChange: 'transform, opacity'
          }}
        />
      ))}
    </div>
  );
};

const HeroSection: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Apple-style mathematical scrubbed animations
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  // Suck the text upward and fade it out rapidly
  const yContent = useTransform(scrollYProgress, [0, 0.4], ["0%", "-40%"]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scaleContent = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  return (
    <section 
      ref={ref}
      style={{
        position: 'relative',
        height: '100vh', // Standard full-height hero
        background: 'var(--bg-primary)'
      }}
    >
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Layered Parallax Background */}
        <motion.div style={{ position: 'absolute', inset: 0, y: yBackground, zIndex: 0, willChange: 'transform' }}>
          <div style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120vw',
            height: '100vh',
            background: 'radial-gradient(ellipse at center, rgba(0, 102, 204, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
            filter: 'blur(80px)',
          }}/>
          <div style={{
            position: 'absolute',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80vw',
            height: '80vw',
            background: 'radial-gradient(circle at center, rgba(0, 122, 255, 0.03) 0%, rgba(255, 255, 255, 0) 60%)',
            filter: 'blur(100px)',
          }}/>
        </motion.div>

        <FloatingFragments />

        {/* Text Content */}
        <motion.div 
          className="container" 
          style={{ 
            position: 'absolute',
            top: '25%',
            zIndex: 10, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center',
            y: yContent,
            opacity: opacityContent,
            scale: scaleContent,
            willChange: 'transform, opacity'
          }}
        >
          <div style={{ height: '2rem' }}></div>

          <h1 style={{
              fontSize: 'clamp(4rem, 10vw, 8rem)', // Massive Apple-style scaling
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1,
              marginBottom: '1.5rem',
              maxWidth: '1200px',
              color: 'var(--text-primary)'
            }}
          >
            Reviving the <br />
            <span className="text-gradient-accent">Lost Wilderness.</span>
          </h1>

          <p style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', // Larger subtext
              fontWeight: 500,
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              marginBottom: '3rem',
              lineHeight: 1.5,
              letterSpacing: '-0.02em'
            }}
          >
            Transforming static fossils into intelligent augmented reality learning experiences.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ 
            position: 'absolute', 
            bottom: '2rem', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '0.8rem',
            zIndex: 30,
            opacity: opacityContent
          }}
        >
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, color: 'var(--text-muted)' }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={20} color="var(--text-muted)" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
