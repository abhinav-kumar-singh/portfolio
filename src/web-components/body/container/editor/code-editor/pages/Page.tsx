import * as styles from './pages.module.css';
import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Choose a theme
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'; // Line numbers
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'; // Enable line numbers
import useFileStore from '../../../../../../store/file.store';

const Page = ({ renderText }: { renderText: string }) => {
  const name = useFileStore((state) => state.name);

  useEffect(() => {
    Prism.highlightAll();
  }, [name]);
  return (
    <pre className={`line-numbers ${styles.code_background}`}>
      <code className="language-javascript">{renderText}</code>
    </pre>
  );
};

export default Page;
