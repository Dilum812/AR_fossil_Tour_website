import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
        <div style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
          AR Fossil & Fauna
        </div>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {['Platform', 'Technology', 'Research', 'Hub'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
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
              {item}
            </a>
          ))}
          <button 
            style={{
              background: 'var(--text-primary)',
              color: 'var(--bg-primary)',
              border: 'none',
              padding: '0.6rem 1.25rem',
              borderRadius: '2rem',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, opacity 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Watch Demo
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
