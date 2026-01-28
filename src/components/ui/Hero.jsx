import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

import './Hero.css';

const Hero = ({ title, subtitle, actions, className = '' }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50
      }
    }
  };

  return (
    <section className={`hero-section ${className}`}>
      {/* Video Background */}
      <div className="hero-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          {/* Professional tech/network abstract video - Pexels Source */}
          <source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>

      <motion.div
        className="container hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-title" variants={itemVariants}>
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p className="hero-subtitle" variants={itemVariants}>
            {subtitle}
          </motion.p>
        )}

        {actions && (
          <motion.div className="hero-actions" variants={itemVariants}>
            {actions}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
