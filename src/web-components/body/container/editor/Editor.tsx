import React, { useState } from 'react';
import useFileStore from '../../../../store/file.store';
import { FileName } from '../../../../constants/files.types';
import * as styles from '../container.module.css';
import { ChevronRight, FileJson, Play, X } from 'lucide-react';
import CodeEditor from './code-editor/CodeEditor';
import Terminal from './terminal/Terminal';
import ExecutedPage from './executed-page/ExecutedPage';
const Editor = () => {
  const name = useFileStore((state) => state.name);

  const [isRunClicked, setIsRunClicked] = useState(false);

  return (
    <>
      <div className={styles.editor_container}>
        <section className={styles.file_name_container}>
          <div className={styles.selected_file_name}>
            <FileJson className={styles.children_icon} />
            {FileName[name]}
            <X className={styles.file_icon} />
          </div>
          <div className={styles.execute} onClick={() => setIsRunClicked(true)}>
            Run
            <Play className={styles.execute_icon} />
          </div>
        </section>
        <section className={styles.file_location_container}>
          <div className={styles.location}>
            portfolio-app <ChevronRight className={styles.file_icon} /> src
            <ChevronRight className={styles.file_icon} /> portfolio
            <ChevronRight className={styles.file_icon} /> {FileName[name]}
          </div>
        </section>
        <section className={styles.code_editor}>
          <CodeEditor />
        </section>
        <section>
          <Terminal />
        </section>
      </div>
      {isRunClicked ? <ExecutedPage setIsRunClicked={setIsRunClicked} /> : null}
    </>
  );
};

export default Editor;
