import React from 'react';
import { motion, useInView } from 'framer-motion';

const TypingEffect = ({ text = 'Typing Effect' }: { text: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }} // Start faded and slightly lower
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
          transition={{ duration: 0.01, delay: index * 0.05 }} // Smooth delay
          style={{
            display: 'inline-block', // Ensures animation per letter
          }}
        >
          {letter === ' ' ? '\u00A0' : letter} {/* Handle spaces properly */}
        </motion.span>
      ))}
    </div>
  );
};

export default TypingEffect;
