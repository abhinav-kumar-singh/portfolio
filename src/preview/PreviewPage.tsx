import React, { useEffect, useState } from 'react';
import { FileSchemaName } from '../constants/files.types';
import {
  CONTACT,
  DEVELOPER,
  EXPERIENCES,
  PROJECTS,
  SKILL_GROUPS,
} from '../constants/all';
import querysonarShot from './shots/querysonar.jpg';
import micmorphShot from './shots/micmorph.jpg';
import taskdriftShot from './shots/taskdrift.jpg';
import * as styles from './preview.module.css';

type PreviewScope = 'full' | FileSchemaName;

type PreviewPageProps = Readonly<{
  scope: PreviewScope;
  onClose?: () => void;
}>;

const STATIONS = ['Name', 'Work', 'Projects', 'Skills', 'Contact'] as const;

const STATION_IDS = ['home', 'experience', 'projects', 'skills', 'contact'];

const SHOTS: Record<string, string> = {
  QuerySonar: querysonarShot,
  MicMorph: micmorphShot,
  'Taskdrift - Task Manager App': taskdriftShot,
};

const stationFromScope = (scope: PreviewScope): number => {
  switch (scope) {
    case FileSchemaName.Experience:
      return 1;
    case FileSchemaName.Projects:
      return 2;
    case FileSchemaName.Skills:
      return 3;
    case FileSchemaName.Contact:
      return 4;
    default:
      return 0;
  }
};

const firstSentence = (text: string): string => {
  const end = text.indexOf('. ');
  if (end === -1) {
    return text;
  }
  return text.slice(0, end + 1);
};

const NameStation = () => {
  return (
    <div>
      <p className={styles.kicker}>{DEVELOPER.title}</p>
      <h1 className={styles.display}>I build products that move.</h1>
      <p className={styles.lede}>{DEVELOPER.summary}</p>
      <p className={styles.quiet}>
        {DEVELOPER.name} · {DEVELOPER.location} · Simpplr
      </p>
    </div>
  );
};

const WorkStation = () => {
  const roles = EXPERIENCES.experiences;
  const [index, setIndex] = useState(0);
  const role = roles[index];

  return (
    <div className={styles.work}>
      <div>
        <p className={styles.kicker}>{role.duration}</p>
        <h1 className={`${styles.display} ${styles.company}`}>{role.company}</h1>
        <p className={styles.roleLine}>{role.position}</p>
        <ul className={styles.lines}>
          {role.responsibilities.slice(0, 4).map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
      <div className={styles.recede}>
        {roles.map((item, itemIndex) => {
          if (itemIndex === index) {
            return null;
          }
          return (
            <button
              key={`${item.company}-${item.duration}`}
              className={styles.ghost}
              onClick={() => setIndex(itemIndex)}
            >
              {item.company}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const ProjectStation = () => {
  const projects = PROJECTS.projects;
  const [index, setIndex] = useState(0);
  const project = projects[index];
  const shot = SHOTS[project.title];

  return (
    <div className={styles.projectLayout}>
      <div>
        <a
          className={styles.shot}
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          <img src={shot} alt="" />
        </a>
        <div className={styles.projectCopy}>
          <h1 className={styles.projectTitle}>{project.title}</h1>
          <p className={styles.lede}>{firstSentence(project.description)}</p>
          <a
            className={styles.openSite}
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            Open site
          </a>
        </div>
      </div>
      <div className={styles.recede}>
        {projects.map((item, itemIndex) => {
          if (itemIndex === index) {
            return null;
          }
          return (
            <button
              key={item.title}
              className={styles.ghost}
              onClick={() => setIndex(itemIndex)}
            >
              {item.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const SkillStation = () => {
  const [index, setIndex] = useState(0);
  const group = SKILL_GROUPS[index];

  return (
    <div>
      <div className={styles.rows}>
        <div className={styles.row}>
          {SKILL_GROUPS.slice(0, 3).map((item, itemIndex) => (
            <button
              key={item.title}
              className={`${styles.word} ${itemIndex === index ? styles.wordActive : ''}`}
              onClick={() => setIndex(itemIndex)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className={`${styles.row} ${styles.backRow}`}>
          {SKILL_GROUPS.slice(3).map((item, offset) => {
            const itemIndex = offset + 3;
            return (
              <button
                key={item.title}
                className={`${styles.word} ${itemIndex === index ? styles.wordActive : ''}`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </div>
      <p className={styles.tools}>{group.skills.join(' · ')}</p>
    </div>
  );
};

const ContactStation = () => {
  return (
    <div>
      <p className={styles.kicker}>Contact</p>
      <h1 className={styles.display}>Say hello.</h1>
      <a className={styles.mail} href={`mailto:${CONTACT.email}`}>
        {CONTACT.email}
      </a>
      <p className={styles.quiet}>
        <a
          className={styles.openSite}
          href={CONTACT.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        {' · '}
        {CONTACT.phone}
        {' · '}
        {DEVELOPER.location}
      </p>
    </div>
  );
};

const StationView = ({ station }: Readonly<{ station: number }>) => {
  switch (station) {
    case 1:
      return <WorkStation />;
    case 2:
      return <ProjectStation />;
    case 3:
      return <SkillStation />;
    case 4:
      return <ContactStation />;
    default:
      return <NameStation />;
  }
};

const PreviewPage = ({ scope, onClose }: PreviewPageProps) => {
  const [station, setStation] = useState(stationFromScope(scope));

  const move = (next: number) => {
    if (next < 0 || next >= STATIONS.length) {
      return;
    }
    setStation(next);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onClose) {
        onClose();
      }
      if (event.key === 'ArrowRight') {
        move(station + 1);
      }
      if (event.key === 'ArrowLeft') {
        move(station - 1);
      }
    };

    const onStation = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      const index = STATION_IDS.indexOf(id);
      if (index >= 0) {
        setStation(index);
      }
    };

    if (onClose) {
      document.body.style.overflow = 'hidden';
    }
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('portfolio-station', onStation);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('portfolio-station', onStation);
    };
  }, [onClose, station]);

  return (
    <div className={styles.page}>
      <div className={styles.floor} aria-hidden="true" />
      <div className={styles.bar}>
        <span className={styles.barLabel}>Preview</span>
        <div>
          <button className={styles.step} onClick={() => move(station - 1)}>
            Back
          </button>{' '}
          <button className={styles.step} onClick={() => move(station + 1)}>
            Forward
          </button>
          {onClose ? (
            <>
              {' '}
              <button className={styles.close} onClick={onClose}>
                Close
              </button>
            </>
          ) : null}
        </div>
      </div>
      <div key={station} id={STATION_IDS[station]} className={styles.stage}>
        <StationView station={station} />
      </div>
      <nav className={styles.rail} aria-label="Preview stations">
        {STATIONS.map((label, index) => (
          <button
            key={label}
            className={index === station ? styles.railOn : undefined}
            onClick={() => move(index)}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default PreviewPage;
