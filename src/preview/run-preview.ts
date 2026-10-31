import { FileName } from '../constants/files.types';
import useFileStore, {
  openFullPreview,
  openSectionPreview,
  pushLog,
  setRunning,
  writePromptCommand,
} from '../store/file.store';

type PreviewRun = 'full' | 'section';

const timers: ReturnType<typeof setTimeout>[] = [];

const clearTimers = () => {
  timers.forEach((timer) => clearTimeout(timer));
  timers.length = 0;
};

const later = (delay: number, action: () => void) => {
  timers.push(setTimeout(action, delay));
};

const warmPreview = (mode: PreviewRun): void => {
  const file = FileName[useFileStore.getState().name];
  const only =
    mode === 'section'
      ? {
          'About.ts': 'about',
          'Experiences.ts': 'work',
          'Projects.ts': 'projects',
          'Skills.ts': 'skills',
          'Contact.ts': 'contact',
        }[file]
      : '';
  const page = only ? `/preview.html?only=${only}` : '/preview.html';
  void fetch(page);
  void import('./PreviewGate');
  const threeSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
  if (!document.querySelector(`link[href="${threeSrc}"]`)) {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'script';
    link.href = threeSrc;
    document.head.appendChild(link);
  }
};

const startPreview = (mode: PreviewRun): void => {
  if (useFileStore.getState().running) {
    return;
  }
  clearTimers();
  setRunning(true);
  warmPreview(mode);
  const file = FileName[useFileStore.getState().name];
  const target = mode === 'section' ? file : 'preview';

  writePromptCommand('npm start');
  later(250, () => pushLog('> portfolioapp@1.0.0 start'));
  later(500, () => pushLog('> rspack dev'));
  later(900, () => pushLog(`Building ${target}...`));
  later(1400, () => pushLog('Rspack compiled successfully in 486 ms.'));
  later(1700, () => {
    pushLog('Local:   http://localhost:3000');
    useFileStore.setState({ statusLabel: 'localhost:3000' });
  });
  later(2000, () => {
    if (mode === 'section') {
      openSectionPreview();
      return;
    }
    openFullPreview();
  });
};

export { startPreview };
