import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Building2, GraduationCap, Globe2, Brain, BarChart3, Database, Glasses, Cloud } from 'lucide-react';

const potentialCards = [
  {
    id: 1,
    icon: Building2,
    headline: 'Deploy immersive museum ecosystems.',
    description: 'The platform can transform traditional museums into intelligent interactive learning environments using augmented reality, AI guidance, and proximity-based navigation.',
    cta: 'Explore deployment'
  },
  {
    id: 2,
    icon: GraduationCap,
    headline: 'Expand learning beyond classrooms.',
    description: 'Schools and educational institutions can integrate the system into history, archaeology, and wildlife education to create highly engaging immersive learning experiences.',
    cta: 'View educational applications'
  },
  {
    id: 3,
    icon: Globe2,
    headline: 'Reimagine cultural tourism.',
    description: 'Historical sites, heritage parks, and tourism experiences can use immersive AR storytelling to increase visitor engagement and cultural awareness.',
    cta: 'See tourism potential'
  },
  {
    id: 4,
    icon: Brain,
    headline: 'Build adaptive educational ecosystems.',
    description: 'The AI-driven narration and dynamic quiz system can evolve into personalized learning platforms tailored to different audiences and age groups.',
    cta: 'Discover AI integration'
  },
  {
    id: 5,
    icon: BarChart3,
    headline: 'Transform interaction into research insights.',
    description: 'Real-time behavioral analytics and engagement tracking enable museums and institutions to measure educational effectiveness through immersive interaction data.',
    cta: 'View analytics system'
  },
  {
    id: 6,
    icon: Database,
    headline: 'Digitally preserve prehistoric history.',
    description: 'The platform can scale into a nationwide fossil digitization initiative, preserving Sri Lanka’s prehistoric wildlife through immersive digital reconstruction.',
    cta: 'Explore preservation opportunities'
  },
  {
    id: 7,
    icon: Glasses,
    headline: 'Extend into next-generation XR experiences.',
    description: 'Future versions of the platform can integrate mixed reality headsets, multiplayer educational systems, and AI-powered collaborative museum exploration.',
    cta: 'See future roadmap'
  },
  {
    id: 8,
    icon: Cloud,
    headline: 'Scale as a museum technology platform.',
    description: 'The project has potential to evolve into a scalable SaaS ecosystem providing immersive museum infrastructure, analytics, and AI educational tools globally.',
    cta: 'View scalability vision'
  }
];

const FuturePotentialSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.4;
      scrollContainerRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  const responsiveLeftMargin = 'max(2rem, calc((100vw - 1400px) / 2 + 2rem))';

  return (
    <section style={{
      padding: '8rem 0 10rem 0',
      background: '#f5f5f7', // Signature Apple light gray
      overflow: 'hidden'
    }}>
      
      {/* Header Area */}
      <div className="container" style={{ marginBottom: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '800px' }}
        >
          <h2 style={{ 
            fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
            color: '#1d1d1f', 
            fontWeight: 700, 
            lineHeight: 1.1, 
            letterSpacing: '-0.04em',
            marginBottom: '1.5rem'
          }}>
            Future Potential Beyond <br/> the Museum.
          </h2>
          <p style={{
            fontSize: '1.4rem',
            color: '#86868b',
            fontWeight: 500,
            lineHeight: 1.4,
            letterSpacing: '-0.01em'
          }}>
            Transforming immersive educational research into scalable real-world experiences.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Cards Container */}
      <div style={{ position: 'relative' }}>
        
        {/* Hide scrollbar with inline styles */}
        <style>{`
          .future-cards-scroll::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* 
          The scroll container starts exactly at the heading's left edge.
          Its width spans the rest of the screen to the right.
          This ensures cards 'disappear' the moment they scroll left of the heading.
        */}
        <div 
          ref={scrollContainerRef}
          className="future-cards-scroll"
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            marginLeft: responsiveLeftMargin,
            width: `calc(100% - ${responsiveLeftMargin})`,
            paddingRight: '10vw',
            paddingBottom: '2rem',
            gap: '2rem',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            alignItems: 'stretch'
          }}
        >
          {potentialCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                style={{
                  flex: '0 0 clamp(300px, 30vw, 400px)', // Uniform card size
                  background: '#ffffff', // Pure white card
                  borderRadius: '32px', // Massive Apple rounding
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  scrollSnapAlign: 'start',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.02)', // Very subtle default shadow
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Icon */}
                <div style={{ marginBottom: '2rem' }}>
                  <Icon size={32} color="#1d1d1f" strokeWidth={1.5} />
                </div>
                
                {/* Text Content */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ 
                    fontSize: '1.4rem', 
                    fontWeight: 700, 
                    color: '#1d1d1f', 
                    marginBottom: '1rem',
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em'
                  }}>
                    {card.headline}
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#86868b',
                    lineHeight: 1.5,
                    fontWeight: 500,
                    marginBottom: '2.5rem'
                  }}>
                    {card.description}
                  </p>
                  
                  {/* CTA */}
                  <div style={{ 
                    marginTop: 'auto',
                    color: '#0066cc', // Apple blue CTA link
                    fontSize: '1rem',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    {card.cta} 
                    <span style={{ fontSize: '1.2rem', paddingBottom: '2px' }}>›</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          padding: '2rem 5vw 0 5vw', 
          gap: '1rem' 
        }}>
          <button 
            onClick={() => scroll('left')}
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
              color: '#1d1d1f',
              transition: 'background 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.08)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right')}
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
              color: '#1d1d1f',
              transition: 'background 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.08)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FuturePotentialSection;
