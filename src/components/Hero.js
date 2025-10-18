import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section className="hero" id="hero">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={itemVariants}
          className="typing-animation"
        >
          Engineering the Future of Smart Power & Automation
        </motion.h2>
        <motion.p
          variants={itemVariants}
        >
          From PCB design to production-ready systems — Sanvix delivers precision hardware and intelligent solutions for modern industries.
        </motion.p>
        <motion.div
          variants={itemVariants}
        >
          <Link 
            to="about" 
            smooth={true} 
            duration={800} 
            className="animated-btn"
            spy={true}
          >
            Learn More
          </Link>
        </motion.div>
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1.5,
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <div className="mouse">
            <div className="scroll-dot"></div>
          </div>
          <p>Scroll Down</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;