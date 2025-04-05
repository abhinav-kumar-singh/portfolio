import React from 'react';
import { motion } from 'framer-motion';

const PARTICLE_COUNT = 25;

const ParticleBackground = () => {
  const particles: React.ReactNode[] = [];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const size = Math.random() * 10 + 5;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;

    particles.push(
      <motion.div
        key={i}
        className="absolute rounded-full bg-purple-700 opacity-10"
        style={{
          width: size,
          height: size,
          left: `${x}%`,
          top: `${y}%`,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, Math.random() * 20 - 10, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          delay,
          ease: 'easeInOut',
        }}
      />,
    );
  }

  return particles;
};

export default ParticleBackground;
