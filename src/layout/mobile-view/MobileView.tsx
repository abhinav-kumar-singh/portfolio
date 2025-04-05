import React from 'react';
import MobileLayout from '../../mobile-component/layout/MobileLayout';
import Hero from '../../mobile-component/home/hero/Hero';
import Skills from '../../mobile-component/home/skills/Skills';
import Experience from '../../mobile-component/home/experience/Experience';
import Projects from '../../mobile-component/home/project/Project';
import Contact from '../../mobile-component/home/contact/Contact';
import './mobile_app.module.css';

const MobileView = () => {
  return (
    <MobileLayout>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </MobileLayout>
  );
};

export default MobileView;
