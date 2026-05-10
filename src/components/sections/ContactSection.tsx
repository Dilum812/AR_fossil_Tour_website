import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SuccessModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(8px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
                borderRadius: '32px',
                padding: '3.5rem 2.5rem',
                width: '100%',
                maxWidth: '440px',
                textAlign: 'center',
                boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <div style={{
                width: '72px',
                height: '72px',
                backgroundColor: '#34c759',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 10px 20px rgba(52, 199, 89, 0.2)'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              
              <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Message Sent.
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#86868b', lineHeight: 1.5, marginBottom: '2.5rem', fontWeight: 500 }}>
                Thanks for reaching out! We’ll review your inquiry and get back to you shortly.
              </p>
              
              <button
                onClick={onClose}
                style={{
                  width: '100%',
                  padding: '1.1rem',
                  backgroundColor: '#1d1d1f',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '100px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Dismiss
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ContactSection: React.FC = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Trying FormSubmit (often faster delivery)
    try {
      const response = await fetch("https://formsubmit.co/ajax/dilumthimiraz8@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      await response.json();
      
      if (response.ok) {
        setShowSuccess(true);
        form.reset();
      } else {
        // Fallback to mailto
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject') || 'Inquiry from AR Fossil Tour';
        const type = formData.get('type') || 'General';
        const message = formData.get('message');
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0ACollaboration Type: ${type}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        window.location.href = `mailto:dilumthimiraz8@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${body}`;
      }
    } catch (error) {
      const name = formData.get('name');
      const message = formData.get('message');
      window.location.href = `mailto:dilumthimiraz8@gmail.com?subject=Inquiry from AR Fossil Tour&body=Name: ${name}%0D%0A%0D%0A${message}`;
    }
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: '12rem 0',
        backgroundColor: '#ffffff',
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
              Let’s Build the <br />
              <span className="text-gradient-accent">Future of Immersive Learning.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: '1.25rem',
                fontWeight: 500,
                color: '#86868b',
                lineHeight: 1.6,
                maxWidth: '600px',
                margin: 0
              }}
            >
              Interested in immersive museum technology, educational innovation, or collaborative research opportunities? Connect to discuss future possibilities.
            </motion.p>
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
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Jane Doe"
                      required
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      style={inputStyle('name')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      required
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      style={inputStyle('email')}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Subject</label>
                  <input
                    name="subject"
                    type="text"
                    placeholder="How can we collaborate?"
                    required
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    style={inputStyle('subject')}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Collaboration Type (Optional)</label>
                  <div style={{ position: 'relative' }}>
                    <select
                      name="type"
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
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project or inquiry..."
                    required
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
                  type="submit"
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
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </section>
  );
};

export default ContactSection;
