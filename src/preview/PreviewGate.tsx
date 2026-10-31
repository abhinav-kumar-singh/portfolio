import React, { useEffect, useState } from 'react';
import useFileStore, {
  closePreview,
  pushLog,
  setFileName,
} from '../store/file.store';
import { FileName, FileSchemaName } from '../constants/files.types';
import Modal from '../common-component/modal/Modal';
import * as styles from './preview-frame.module.css';

const SECTION_ONLY: Partial<Record<FileSchemaName, string>> = {
  [FileSchemaName.About]: 'about',
  [FileSchemaName.Experience]: 'work',
  [FileSchemaName.Projects]: 'projects',
  [FileSchemaName.Skills]: 'skills',
  [FileSchemaName.Contact]: 'contact',
};

const FILE_FOR_SECTION: Record<string, FileSchemaName> = {
  about: FileSchemaName.About,
  work: FileSchemaName.Experience,
  projects: FileSchemaName.Projects,
  skills: FileSchemaName.Skills,
  contact: FileSchemaName.Contact,
};

type PreviewFrameProps = Readonly<{
  only?: string;
  partial?: boolean;
  onClose?: () => void;
  fileLabel?: string;
}>;

const PreviewFrame = ({
  only = '',
  partial = false,
  onClose,
  fileLabel = 'http://localhost:3000',
}: PreviewFrameProps) => {
  const [frameKey, setFrameKey] = useState(0);

  useEffect(() => {
    if (!onClose) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  const src = only ? `/preview.html?only=${only}` : '/preview.html';
  const frame = (
    <iframe
      key={frameKey}
      className={styles.frame}
      title="Abhinav Kumar Singh"
      src={src}
    />
  );

  if (partial && onClose) {
    return (
      <Modal
        onclose={onClose}
        onRefresh={() => setFrameKey((key) => key + 1)}
        url={fileLabel}
      >
        {frame}
      </Modal>
    );
  }

  return (
    <div className={styles.shell}>
      {onClose ? (
        <button className={styles.editor} onClick={onClose}>
          Editor
        </button>
      ) : null}
      {frame}
    </div>
  );
};

const PreviewGate = () => {
  const preview = useFileStore((state) => state.preview);
  const name = useFileStore((state) => state.name);
  const partial = preview === 'section';
  const only = partial ? SECTION_ONLY[name] ?? '' : '';

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) {
        return;
      }
      const data = event.data as { type?: string; section?: string };
      if (data?.type !== 'preview-open' || !data.section) {
        return;
      }
      const file = FILE_FOR_SECTION[data.section];
      if (!file || !useFileStore.getState().preview) {
        return;
      }
      setFileName(file);
      pushLog(`open src/portfolio/${FileName[file]}`);
    };

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <PreviewFrame
      only={only}
      partial={partial}
      onClose={closePreview}
      fileLabel={FileName[name]}
    />
  );
};

export default PreviewGate;
export { PreviewFrame };
