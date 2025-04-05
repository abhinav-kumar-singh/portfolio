import React, { useRef } from 'react';
import * as styles from './container.module.css';
import Explorer from './explorer/Explorer';
import Editor from './editor/Editor';
import useFileStore from '../../../store/file.store';
import { ACTION } from '../../../constants/left-action';
import SearchBar from './explorer/search-bar';

const Container = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isResizing = useRef(false);
  const startX = useRef(0); // Stores initial cursor position
  const startWidth = useRef(0); // Stores sidebar width at drag start

  const selectedAction = useFileStore((state) => state.selectedAction);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (!sidebarRef.current) return;

    isResizing.current = true;
    startX.current = event.clientX; // Store where the user clicked
    startWidth.current = sidebarRef.current.offsetWidth; // Store sidebar width

    document.body.style.cursor = 'ew-resize';
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizing.current || !sidebarRef.current) return;

    requestAnimationFrame(() => {
      const deltaX = event.clientX - startX.current; // Difference from initial click
      const newWidth = Math.max(
        155,
        Math.min(startWidth.current + deltaX, 400),
      );
      sidebarRef.current!.style.width = `${newWidth}px`;
    });
  };

  const handleMouseUp = () => {
    isResizing.current = false;
    document.body.style.cursor = '';
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const getExploreBarRenderer = () => {
    switch (selectedAction) {
      case ACTION.Files:
        return <Explorer />;
      case ACTION.Search:
        return <SearchBar />;
      case ACTION.GitGraph:
        return <Explorer />;
      case ACTION.Blocks:
        return <Explorer />;
      case ACTION.Profile:
        return <Explorer />;
      case ACTION.Settings:
        return <Explorer />;
      default:
    }
  };

  return (
    <div className={styles.container}>
      <div ref={sidebarRef} className={styles.sidebar}>
        {getExploreBarRenderer()}
      </div>
      <div className={styles.resizer} onMouseDown={handleMouseDown} />
      <div className={styles.content}>
        <Editor />
      </div>
    </div>
  );
};

export default Container;
