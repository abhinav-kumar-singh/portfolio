import React from 'react';
import * as styles from '../container.module.css';
import useFileStore, { setFileName } from '../../../../store/file.store';
import { FileJson } from 'lucide-react';
import { FileSchemaName } from '../../../../constants/files.types';

const FileRenderer = ({
  files,
  showMarker = true,
}: {
  files: { id: number; label: string; value: FileSchemaName }[];
  showMarker?: boolean;
}) => {
  const name = useFileStore((state) => state.name);
  const handleFileClick = (fileName: FileSchemaName) => {
    setFileName(fileName);
  };
  return (
    <div className={styles.accordion_children_container}>
      {showMarker ? (
        <div className={styles.accordion_children_file_marker}></div>
      ) : null}
      {files.map((file) => {
        return (
          <div
            key={file.id}
            className={`${styles.children_file} ${
              name === file.value ? styles.active_child : ''
            }`}
            onClick={() => handleFileClick(file.value)}
          >
            <FileJson className={styles.children_icon} />
            {file.label}
          </div>
        );
      })}
    </div>
  );
};

export default FileRenderer;
