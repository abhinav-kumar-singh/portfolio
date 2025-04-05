import React, { useEffect, useRef, useState } from 'react';
import * as styles from '../header.module.css';
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  ChevronDown,
  FileJson,
  Search,
} from 'lucide-react';
import PORTFOLIO_FILES, {
  CONTACT_FILES,
} from '../../../constants/portfolio-file';
import useFileStore, { setFileName } from '../../../store/file.store';
import { FileSchemaName } from '../../../constants/files.types';

const Secondary = () => {
  const [open, setOpen] = useState(false);
  const name = useFileStore((state) => state.name);
  const searchBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const handleFileClick = (fileName: FileSchemaName) => {
    setFileName(fileName);
  };
  return (
    <div className={styles.secondary}>
      <ArrowLeft className={styles.icon} />
      <ArrowRight className={styles.icon} />
      <div
        className={styles.searchBar}
        onClick={() => setOpen(!open)}
        ref={searchBarRef}
      >
        <div className={styles.searchBar_content}>
          <Search className={styles.search_icon} /> portfolio-app
        </div>
        {open ? (
          <div className={styles.search_bar_field}>
            {[...PORTFOLIO_FILES, ...CONTACT_FILES].map((file) => {
              return (
                <div
                  key={file.id}
                  className={`${styles.search_bar_field_value}`}
                  onClick={() => handleFileClick(file.value)}
                >
                  <div className={styles.about_file}>
                    <FileJson className={styles.icon} />
                    <div className={styles.field_label}>{file.label}</div>
                    <div
                      className={styles.field_location}
                      title={`portfolio-app/src/portfolio/${file.label}`}
                    >
                      portfolio-app/src/portfolio/{file.label}
                    </div>
                  </div>
                  <div
                    className={
                      name === file.value ? styles.active : styles.inactive
                    }
                  >
                    recently opened
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div>
        <Brain className={styles.icon} />
        <ChevronDown className={styles.icon} />
      </div>
    </div>
  );
};

export default Secondary;
