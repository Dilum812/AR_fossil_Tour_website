import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { animate } from 'framer-motion';

const slides = [
  {
    text: "Static exhibits are losing the digital generation.",
    image: "/museum-scene.png"
  },
  {
    text: "74% of young visitors disengage from traditional printed labels.",
    image: "/media__1778257658360.png"
  },
  {
    text: "Museums lack the tools for the future of immersive learning.",
    image: "/media__1778258552276.png"
  },
  {
    text: "A bridge between the past and the future of spatial computing.",
    image: "/hero-fossil.png" // using hero fossil as a placeholder for AR
  }
];

const ProblemNeedSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        const nextIndex = (activeIndex + 1) % slides.length;
        scrollToSlide(nextIndex);
      }, 5000); // Increased to 5 seconds per slide to account for slower animation
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeIndex]);

  // Handle scroll to update the active dot perfectly based on center of viewport
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const scrollLeft = container.scrollLeft;
        
        const cardWidth = window.innerWidth * 0.9; 
        const gap = 24; // 1.5rem
        const itemTotalWidth = cardWidth + gap;
        
        const index = Math.round(scrollLeft / itemTotalWidth);
        
        // Clamp index to bounds
        const clampedIndex = Math.max(0, Math.min(index, slides.length - 1));
        
        // Only update state if it actually changed to prevent re-renders
        if (clampedIndex !== activeIndex) {
          setActiveIndex(clampedIndex);
        }
      }
    };

    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeIndex]);

  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = Math.min(window.innerWidth * 0.9, 1400); // Max width is 1400
      const gap = 24; // 1.5rem
      const itemTotalWidth = cardWidth + gap;
      
      const targetScroll = index * itemTotalWidth;

      // Slower, highly cinematic smooth animation
      animate(container.scrollLeft, targetScroll, {
        type: "tween",
        ease: [0.65, 0, 0.35, 1], // Cinematic ease-in-out
        duration: 1.5, // Slowed down from 0.8s
        onUpdate: (latest) => {
          if (container) {
            container.scrollLeft = latest;
          }
        }
      });
      
      setActiveIndex(index);
    }
  };

  return (
    <section 
      id="research"
      style={{ 
        position: 'relative',
        background: 'var(--bg-primary)',
        padding: '8rem 0 6rem 0',
        borderTop: '1px solid rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Section Header */}
      <div style={{ width: '100%', maxWidth: '1400px', padding: '0 10vw', marginBottom: '2.5rem' }}>
        <h2 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
          fontWeight: 700, 
          letterSpacing: '-0.04em',
          color: 'var(--text-primary)' 
        }}>
          Get the highlights.
        </h2>
      </div>

      {/* Horizontal Snap Carousel */}
      <div 
        ref={scrollRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          width: '100%',
          padding: '0 max(5vw, calc(50vw - 700px))', // perfectly centers a 90vw/1400px max card
          gap: '1.5rem',
          scrollbarWidth: 'none', // Firefox
          WebkitOverflowScrolling: 'touch',
        }}
        className="hide-scrollbar"
      >
        <style>
          {`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
        {slides.map((slide, index) => (
          <div 
            key={index}
            style={{
              flex: '0 0 auto',
              width: '90vw',
              maxWidth: '1400px',
              height: '75vh',
              scrollSnapAlign: 'center', // Snaps perfectly to the center of the scrollport
              position: 'relative',
              borderRadius: '40px', // Match the 40px radius of Take a Closer Look
              overflow: 'hidden',
              background: '#f5f5f7',
            }}
          >
            {/* Background Image */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} />

            {/* Subtle gradient at the top for better text readability */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '40%',
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 100%)',
              pointerEvents: 'none'
            }} />

            {/* Apple-style floating text */}
            <div style={{
              position: 'absolute',
              top: '12%',
              left: '0',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              padding: '0 3rem'
            }}>
              <p style={{
                color: '#ffffff',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                fontWeight: 600,
                textAlign: 'center',
                maxWidth: '600px',
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                textShadow: '0 2px 10px rgba(0,0,0,0.2)'
              }}>
                {slide.text}
              </p>
            </div>
          </div>
        ))}
        {/* Spacer at the end so the last item can center properly on wide screens. 
            Because the container has 10vw right padding, the last card will naturally center if it is 80vw wide. 
            However, flex containers sometimes collapse trailing padding. */}
        <div style={{ flex: '0 0 1px' }} />
      </div>

      {/* Apple-style Navigation & Controls Container */}
      <div style={{
        marginTop: '2.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}>
        {/* Pagination Pill */}
        <div style={{
          background: '#e8e8ed',
          padding: '12px 16px',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              style={{
                width: activeIndex === index ? '28px' : '6px',
                height: '6px',
                borderRadius: '3px',
                background: activeIndex === index ? '#424245' : '#86868b',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
                padding: 0
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: '#e8e8ed',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#1d1d1f',
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#d2d2d7'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#e8e8ed'}
          aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
        >
          {isPlaying ? (
            <Pause size={14} fill="currentColor" strokeWidth={0} />
          ) : (
            <Play size={14} fill="currentColor" strokeWidth={0} style={{ marginLeft: '2px' }} />
          )}
        </button>
      </div>
    </section>
  );
};

export default ProblemNeedSection;
