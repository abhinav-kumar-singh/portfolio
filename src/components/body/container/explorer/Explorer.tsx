import React from 'react';
import * as styles from '../container.module.css';
import Accordion from '../../../common/accordion';
import PORTFOLIO_FILES, {
  CONTACT_FILES,
} from '../../../../constants/portfolio-file';
import { FileJson, Folder } from 'lucide-react';
import useFileStore, { setFileName } from '../../../../store/file.store';
import { FileSchemaName } from '../../../../constants/files.types';
import FileRenderer from './FileRenderer';

const Explorer = () => {
  const handleFileClick = (fileName: FileSchemaName) => {
    setFileName(fileName);
  };

  const name = useFileStore((state) => state.name);

  return (
    <div>
      <div className={styles.explorer_heading}>EXPLORER</div>
      <div className={` ${styles.project_name_tag}`}>PORTFOLIOAPP</div>
      <Accordion
        isAccordionOpen={true}
        title={
          <div className={styles.accordion_title}>
            <Folder className={styles.title_icon} /> portfolio
          </div>
        }
        children={<FileRenderer files={PORTFOLIO_FILES} />}
        customStyle={styles.accordion_container}
      />
      <Accordion
        isAccordionOpen={true}
        title={
          <div className={styles.accordion_title}>
            <Folder className={styles.title_icon} /> contact
          </div>
        }
        children={
          // <div>
          //   {CONTACT_FILES.map((file) => {
          //     return (
          //       <div
          //         key={file.id}
          //         className={`${styles.children_file} ${
          //           name === file.value ? styles.active_child : ''
          //         }`}
          //         onClick={() => handleFileClick(file.value)}
          //       >
          //         <FileJson className={styles.children_icon} />
          //         {file.label}
          //       </div>
          //     );
          //   })}
          // </div>
          <FileRenderer files={CONTACT_FILES} showMarker={false} />
        }
        customStyle={styles.accordion_container}
      />
    </div>
  );
};

export default Explorer;
