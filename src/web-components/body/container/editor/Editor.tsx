import React from 'react';
import useFileStore from '../../../../store/file.store';
import { startPreview } from '../../../../preview/run-preview';
import { FileName } from '../../../../constants/files.types';
import * as styles from '../container.module.css';
import { ChevronRight, FileJson, Play, X } from 'lucide-react';
import CodeEditor from './code-editor/CodeEditor';
import Terminal from './terminal/Terminal';

const Editor = () => {
  const name = useFileStore((state) => state.name);
  const running = useFileStore((state) => state.running);

  return (
    <>
      <div className={styles.editor_container}>
        <section className={styles.file_name_container}>
          <div className={styles.selected_file_name}>
            <FileJson className={styles.children_icon} />
            {FileName[name]}
            <X className={styles.file_icon} />
          </div>
          <button
            className={styles.execute}
            disabled={running}
            onClick={() => startPreview('section')}
          >
            <Play className={styles.execute_icon} aria-hidden="true" />
            Run
          </button>
        </section>
        <section className={styles.file_location_container}>
          <div className={styles.location}>
            portfolio-app <ChevronRight className={styles.crumb_icon} /> src
            <ChevronRight className={styles.crumb_icon} /> portfolio
            <ChevronRight className={styles.crumb_icon} /> {FileName[name]}
          </div>
        </section>
        <section className={styles.code_editor}>
          <CodeEditor />
        </section>
        <section className={styles.terminal_panel}>
          <Terminal />
        </section>
      </div>
    </>
  );
};

export default Editor;
