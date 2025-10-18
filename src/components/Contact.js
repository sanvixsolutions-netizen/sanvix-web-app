import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Contact Us
        </motion.h2>
        <div className="contact-content">
          <div className="contact-info">
            <motion.div 
              className="info-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p>Have questions about our products or services? We're here to help!</p>
              <div className="contact-details">
                <div className="contact-column">
                  <div className="detail">
                    Email: <a href="mailto:sanvix.tech@gmail.com" className="value">sanvix.tech@gmail.com</a>
                  </div>
                  <div className="detail">
                    Phone: <a href="tel:+917904462054" className="value">+91-7904462054</a>
                  </div>
                </div>
                <a 
                  href="https://forms.gle/h2kpopwcaKB8p9sr7" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="enquire-btn"
                >
                  Enquire Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;