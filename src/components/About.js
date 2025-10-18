import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section id="about" className="about">
            <div className="about-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="section-title"
                >
                    About Us
                </motion.h2>
                <div className="about-content">
                    <div className="about-text" data-aos="fade-right">
                        <h3>Innovating Power Solutions</h3>
                        <p>
                            At Sanvix Solutions, we're dedicated to revolutionizing the power and automation industry
                            through innovative engineering solutions. Our team of experts combines decades of experience
                            with cutting-edge technology to deliver reliable, efficient, and intelligent power systems.
                        </p>
                        <p>
                            From concept to completion, we work closely with our clients to understand their unique needs
                            and develop customized solutions that exceed expectations.
                        </p>
                    </div>
                    <div className="about-features" data-aos="fade-left">
                        <div className="feature">
                            <h4>Industry Expertise</h4>
                            <p>Over 15 years of combined experience in power systems and automation</p>
                        </div>
                        <div className="feature">
                            <h4>Innovation Focus</h4>
                            <p>Continuous investment in R&D to stay ahead of industry trends</p>
                        </div>
                        <div className="feature">
                            <h4>Quality Assurance</h4>
                            <p>Rigorous testing and certification processes for all products</p>
                        </div>
                    </div>
                </div>

                <div className="service-cards">
                    <motion.div
                        className="product-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
                            alt="Mini UPS Hub"
                            className="product-image"
                        />
                        <h3>Hardware & PCB Design</h3>
                        <p>From concept to circuit — complete in-house design for industrial and OEM applications.</p>
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
                        <h3>Smart Power Systems</h3>
                        <p>Reliable, compact, and efficient designs for real-world energy and automation systems.</p>
                    </motion.div>

                    <motion.div
                        className="product-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                            alt="Mini UPS Hub"
                            className="product-image"
                        />
                        <h3>Automation Modules</h3>
                        <p>Scalable OEM-grade sensing and switching modules for smarter products.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;