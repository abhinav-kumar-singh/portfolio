import React from 'react';
import useFileStore from '../../../../../store/file.store';
import { sourceFor } from '../../../../../constants/source-file';
import Page from './pages/Page';

const CodeEditor = () => {
  const name = useFileStore((state) => state.name);

  return <Page renderText={sourceFor(name)} />;
};

export default CodeEditor;
