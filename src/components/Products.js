import React from 'react';
import './Products.css';
import { motion } from 'framer-motion';

const Products = () => {
  return (
    <section className="products">
      <motion.h2 
        className="products-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Products
      </motion.h2>
      
      <div className="products-container">
        <motion.div 
          className="product-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1554475901-4538ddfbccc2" 
            alt="Bike Jump Starter"
            className="product-image"
          />
          <h3>Bike Jump Starter</h3>
          <p>Compact, portable power system for bikes — reliable and safe with smart protection circuitry.</p>
        </motion.div>

        <motion.div 
          className="product-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1554475901-4538ddfbccc2" 
            alt="Mini UPS Hub"
            className="product-image"
          />
          <h3>Mini-UPS Hub</h3>
          <p>Premium router + mobile backup system ensuring uninterrupted connectivity during power outages.</p>
        </motion.div>

        <motion.div 
          className="product-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
            alt="OEM Automation Modules"
            className="product-image"
          />
          <h3>OEM Automation Modules</h3>
          <p>High-reliability sensing and control modules — Triac SSRs, voltage/current sensors, and more.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;