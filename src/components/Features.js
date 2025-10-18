import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="feature">
        <img src="https://images.unsplash.com/photo-1581090700227-1e37b190418e" alt="Hardware Design" />
        <h3>Hardware & PCB Design</h3>
        <p>From concept to circuit — complete in-house design for industrial and OEM applications.</p>
      </div>
      <div className="feature">
        <img src="https://images.unsplash.com/photo-1581093588401-22e8c68c5c84" alt="Power Systems" />
        <h3>Smart Power Systems</h3>
        <p>Reliable, compact, and efficient designs for real-world energy and automation systems.</p>
      </div>
      <div className="feature">
        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" alt="Automation Modules" />
        <h3>Automation Modules</h3>
        <p>Scalable OEM-grade sensing and switching modules for smarter products.</p>
      </div>
    </section>
  );
};

export default Features;