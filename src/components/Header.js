import React, { useState, useEffect } from 'react';
import { Link, Events } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    const handleTouchMove = (e) => {
      if (isOpen) {
        e.preventDefault();
      }
    };

    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});

    document.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('touchmove', handleTouchMove);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, [scrolled, isOpen]);

  return (
    <header className={`${scrolled ? 'scrolled' : ''} ${isOpen ? 'nav-open' : ''}`}>
      <motion.div 
        className="logo"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <svg viewBox="0 0 950 180" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="90" fontFamily="Arial, Helvetica, sans-serif" fontSize="90" fontWeight="bold" fill="#8028c8">SANVIX SOLUTIONS</text>
          <text x="0" y="160" fontFamily="Arial, Helvetica, sans-serif" fontSize="48" fill="#8028c8" letterSpacing="8">SMART. SIMPLE. SANVIX.</text>
        </svg>
      </motion.div>
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className={`hamburger ${isOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className={isOpen ? 'active' : ''}>
        <motion.div className="nav-links">
          <Link 
            to="hero" 
            spy={true} 
            smooth={true} 
            offset={0} 
            duration={800} 
            className="nav-link"
            activeClass="active"
            onClick={() => setIsOpen(false)}
            onSetActive={() => setActiveSection('hero')}
          >
            <motion.span
              animate={{ color: activeSection === 'hero' ? '#8028c8' : '#fff' }}
              transition={{ duration: 0.3 }}
            >
              Home
            </motion.span>
          </Link>
          <Link 
            to="about" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={800} 
            className="nav-link"
            activeClass="active"
            onClick={() => setIsOpen(false)}
            onSetActive={() => setActiveSection('about')}
          >
            <motion.span
              animate={{ color: activeSection === 'about' ? '#8028c8' : '#fff' }}
              transition={{ duration: 0.3 }}
            >
              About
            </motion.span>
          </Link>
          <Link 
            to="products" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={800} 
            className="nav-link"
            activeClass="active"
            onClick={() => setIsOpen(false)}
            onSetActive={() => setActiveSection('products')}
          >
            <motion.span
              animate={{ color: activeSection === 'products' ? '#8028c8' : '#fff' }}
              transition={{ duration: 0.3 }}
            >
              Products
            </motion.span>
          </Link>
          <Link 
            to="contact" 
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={800} 
            className="nav-link"
            activeClass="active"
            onClick={() => setIsOpen(false)}
            onSetActive={() => setActiveSection('contact')}
          >
            <motion.span
              animate={{ color: activeSection === 'contact' ? '#8028c8' : '#fff' }}
              transition={{ duration: 0.3 }}
            >
              Contact
            </motion.span>
          </Link>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;