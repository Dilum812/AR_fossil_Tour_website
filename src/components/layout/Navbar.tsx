import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/Ar fossil tour logo.png';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '6px',
        background: 'linear-gradient(90deg, #3b82f6 0%, #a855f7 35%, #ec4899 70%, #f97316 100%)',
        zIndex: 100,
        opacity: scrolled ? 0 : 1,
        transform: scrolled ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }} />

      <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '1rem 0',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        background: scrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled ? 'var(--glass-blur)' : 'none',
        WebkitBackdropFilter: scrolled ? 'var(--glass-blur)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.05)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div 
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={logoImg} alt="AR Fossil Tour Logo" style={{ height: '32px', width: 'auto' }} />
        </div>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {[
            { label: 'Platform', id: 'solution' },
            { label: 'Technology', id: 'future' },
            { label: 'Research', id: 'validation' },
            { label: 'Hub', id: 'resource-hub' },
            { label: 'Team', id: 'team' }
          ].map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {item.label}
            </a>
          ))}
          <motion.button 
            onClick={() => window.open("https://drive.google.com/file/d/1AoobwVTys55oXIhm4m2OckcIDusF7wkW/view?usp=sharing", "_blank")}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: isButtonHovered 
                ? 'linear-gradient(135deg, #3b82f6 0%, #a855f7 33%, #ec4899 66%, #f97316 100%)' 
                : 'var(--text-primary)',
              color: 'var(--bg-primary)',
              border: 'none',
              padding: '0.6rem 1.5rem',
              borderRadius: '2rem',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'visible',
              transition: 'background 0.4s ease, box-shadow 0.3s ease',
              boxShadow: isButtonHovered ? '0 10px 20px rgba(168, 85, 247, 0.3)' : 'none',
            }}
          >
            <span style={{ position: 'relative', zIndex: 2 }}>Watch Demo</span>
            
            {/* AI Sparkle/Star Effect */}
            <AnimatePresence>
              {isButtonHovered && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        scale: [0, 1.2, 0.5],
                        x: (i === 0 ? -20 : i === 1 ? 20 : 0),
                        y: (i === 2 ? -25 : -15)
                      }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        repeat: Infinity, 
                        delay: i * 0.2,
                        ease: "easeOut"
                      }}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        pointerEvents: 'none',
                        zIndex: 1
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="white" />
                      </svg>
                    </motion.div>
                  ))}
                </>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.nav>
    </>
  );
};

export default Navbar;
