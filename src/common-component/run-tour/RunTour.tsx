import React, { useEffect, useState } from 'react';
import * as styles from './run-tour.module.css';

const TOUR_STORAGE_KEY = 'portfolio-run-tour-completed';

type Target = 'global' | 'section';

const steps: Array<{ target: Target; title: string; description: string }> = [
  {
    target: 'global',
    title: 'Start with Run',
    description: 'Run the full portfolio preview from here.',
  },
  {
    target: 'section',
    title: 'Preview a section',
    description: 'Use this Run button to preview only the selected tab.',
  },
];

const getTarget = (target: Target): HTMLElement | null =>
  document.querySelector(`[data-tour="${target}-run"]`);

const RunTour = () => {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (window.innerWidth < 900 || localStorage.getItem(TOUR_STORAGE_KEY)) {
      return;
    }
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const updatePosition = () => setRect(getTarget(steps[step].target)?.getBoundingClientRect() ?? null);
    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [step, visible]);

  const close = () => {
    localStorage.setItem(TOUR_STORAGE_KEY, 'true');
    setVisible(false);
  };

  if (!visible || !rect) return null;

  const currentStep = steps[step];
  const tooltipTop = Math.min(rect.bottom + 14, window.innerHeight - 150);
  const tooltipLeft = Math.max(16, Math.min(rect.left - 100, window.innerWidth - 300));

  return (
    <div className={styles.tour} role="dialog" aria-label="Portfolio tour">
      <div className={styles.backdrop} />
      <div
        className={styles.spotlight}
        style={{ top: rect.top - 8, left: rect.left - 8, width: rect.width + 16, height: rect.height + 16 }}
      />
      <div className={styles.tooltip} style={{ top: tooltipTop, left: tooltipLeft }}>
        <div className={styles.step}>Step {step + 1} of {steps.length}</div>
        <h2>{currentStep.title}</h2>
        <p>{currentStep.description}</p>
        <div className={styles.actions}>
          <button className={styles.skip} onClick={close}>Skip</button>
          <button className={styles.next} onClick={() => (step === steps.length - 1 ? close() : setStep(step + 1))}>
            {step === steps.length - 1 ? 'Got it' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RunTour;
