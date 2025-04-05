import React from 'react';
import useFileStore from '../../../../../store/file.store';
import { FileSchemaName } from '../../../../../constants/files.types';
import ExecutedSkills from './executed-skills';
import ExecutedProject from './executed-project';
import ExecutedAbout from './executed-about';
import ExecutedExperience from './executed-experience';
import ExecutedContact from './executed-contact';

interface IExecutedPage {
  setIsRunClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExecutedPage = (props: IExecutedPage) => {
  const { setIsRunClicked } = props;

  const name = useFileStore((state) => state.name);

  const getRenderedComponent = () => {
    switch (name) {
      case FileSchemaName.About:
        return <ExecutedAbout setIsRunClicked={setIsRunClicked} />;
      case FileSchemaName.Skills:
        return <ExecutedSkills setIsRunClicked={setIsRunClicked} />;
      case FileSchemaName.Projects:
        return <ExecutedProject setIsRunClicked={setIsRunClicked} />;
      case FileSchemaName.Experience:
        return <ExecutedExperience setIsRunClicked={setIsRunClicked} />;
      case FileSchemaName.Contact:
        return <ExecutedContact setIsRunClicked={setIsRunClicked} />;
    }
  };
  return <div>{getRenderedComponent()}</div>;
};

export default ExecutedPage;
