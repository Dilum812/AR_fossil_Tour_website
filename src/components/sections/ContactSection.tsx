import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const inputStyle = (fieldName: string) => ({
    width: '100%',
    padding: '1.2rem 1.5rem',
    fontSize: '1.1rem',
    color: '#1d1d1f',
    backgroundColor: focusedField === fieldName ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
    border: `1px solid ${focusedField === fieldName ? '#0066cc' : 'rgba(0, 0, 0, 0.08)'}`,
    borderRadius: '16px',
    outline: 'none',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    boxShadow: focusedField === fieldName ? '0 0 0 4px rgba(0, 102, 204, 0.1)' : 'none',
  });

  const labelStyle = {
    display: 'block',
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#86868b',
    marginBottom: '0.5rem',
    letterSpacing: '-0.01em'
  };

  return (
    <section 
      id="contact"
      style={{
        position: 'relative',
        padding: '12rem 0',
        backgroundColor: '#ffffff', // Very clean white/light neutral
        color: '#1d1d1f',
        overflow: 'hidden'
      }}
    >
      {/* Ambient background glows */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(0, 102, 204, 0.03) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%',
        }} />
      </div>

      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '6rem',
          alignItems: 'center'
        }}>
          
          {/* LEFT SIDE: Editorial Content */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ 
                fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
                fontWeight: 700, 
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                marginBottom: '1.5rem',
                color: '#1d1d1f'
              }}
            >
              Let’s Build the <br/>
              <span className="text-gradient-accent">Future of Immersive Learning.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ 
                fontSize: '1.3rem', 
                fontWeight: 500,
                color: '#86868b', 
                lineHeight: 1.5,
                marginBottom: '4rem',
                maxWidth: '600px'
              }}
            >
              Interested in immersive museum technology, educational innovation, or collaborative research opportunities? Connect to discuss future possibilities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem'
              }}
            >
              {/* Premium Portrait */}
              <div style={{ position: 'relative', width: '100%', maxWidth: '480px' }}>
                {/* Subtle floating glow behind image */}
                <div style={{
                  position: 'absolute',
                  inset: '-30px',
                  background: 'radial-gradient(circle, rgba(0, 102, 204, 0.15) 0%, rgba(255,255,255,0) 70%)',
                  borderRadius: '50%',
                  zIndex: 0
                }} />
                
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    width: '100%',
                    aspectRatio: '16 / 10',
                    borderRadius: '32px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.03)',
                    border: '1px solid rgba(255,255,255,0.8)',
                    backgroundColor: '#f5f5f7'
                  }}
                >
                  <img 
                    src="/researcher_portrait.png" 
                    alt="Dissanayake D.M.D.T - Interactive Media Researcher"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                </motion.div>
              </div>

              {/* Researcher Info */}
              <div>
                <h4 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '0.3rem', letterSpacing: '-0.02em' }}>
                  Dissanayake D.M.D.T
                </h4>
                <span style={{ fontSize: '1.1rem', color: '#0066cc', fontWeight: 600, display: 'block', marginBottom: '0' }}>
                  Interactive Media Researcher
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              padding: '4rem 3rem',
              borderRadius: '40px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.02)',
              border: '1px solid rgba(255, 255, 255, 0.5)'
            }}>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe"
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      style={inputStyle('name')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input 
                      type="email" 
                      placeholder="jane@example.com"
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      style={inputStyle('email')}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Subject</label>
                  <input 
                    type="text" 
                    placeholder="How can we collaborate?"
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    style={inputStyle('subject')}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Collaboration Type (Optional)</label>
                  <div style={{ position: 'relative' }}>
                    <select
                      defaultValue=""
                      onFocus={() => setFocusedField('type')}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        ...inputStyle('type'),
                        appearance: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="" disabled>Select an area of interest...</option>
                      <option value="Research">Research Collaboration</option>
                      <option value="Museum">Museum Partnership</option>
                      <option value="Education">Educational Deployment</option>
                      <option value="Technical">Technical Inquiry</option>
                      <option value="Media">Media / Presentation</option>
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div style={{
                      position: 'absolute',
                      right: '1.5rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      pointerEvents: 'none',
                      color: '#86868b'
                    }}>
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell me about your project or inquiry..."
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    style={{
                      ...inputStyle('message'),
                      resize: 'vertical',
                      minHeight: '120px'
                    }}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    marginTop: '1rem',
                    width: '100%',
                    padding: '1.2rem',
                    backgroundColor: '#1d1d1f',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '100px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000000'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1d1d1f'}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
