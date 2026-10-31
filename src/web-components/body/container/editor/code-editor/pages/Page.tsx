import * as styles from './pages.module.css';
import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import useFileStore, { setCursor } from '../../../../../../store/file.store';

const Page = ({ renderText }: { renderText: string }) => {
  const name = useFileStore((state) => state.name);
  const lines = renderText.split('\n');

  useEffect(() => {
    Prism.highlightAll();
  }, [name, renderText]);

  const onMouseMove = (event: React.MouseEvent<HTMLPreElement>) => {
    const pre = event.currentTarget;
    const bounds = pre.getBoundingClientRect();
    const computed = window.getComputedStyle(pre);
    const lineHeight = Number.parseFloat(computed.lineHeight) || 21;
    const paddingTop = Number.parseFloat(computed.paddingTop) || 0;
    const paddingLeft = Number.parseFloat(computed.paddingLeft) || 0;
    const y = event.clientY - bounds.top + pre.scrollTop - paddingTop;
    const lineNumber = Math.min(
      lines.length,
      Math.max(1, Math.floor(y / lineHeight) + 1),
    );
    const text = lines[lineNumber - 1] ?? '';
    const charWidth = 8.4;
    const x = event.clientX - bounds.left + pre.scrollLeft - paddingLeft;
    const column = Math.min(
      text.length + 1,
      Math.max(1, Math.floor(x / charWidth) + 1),
    );
    setCursor(lineNumber, column);
  };

  return (
    <div className={styles.editorRow}>
      <pre
        className={`line-numbers ${styles.code_background}`}
        onMouseMove={onMouseMove}
      >
        <code className="language-javascript">{renderText}</code>
      </pre>
      <div className={styles.minimap} aria-hidden="true">
        {lines.map((line, index) => (
          <span
            key={`${index}-${line.length}`}
            className={styles.minimapLine}
            style={{ width: `${Math.min(line.length, 48) * 2}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
