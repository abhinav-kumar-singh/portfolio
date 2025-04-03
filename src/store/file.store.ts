import { create } from 'zustand';
import { FileSchemaName } from '../constants/files.types';
import { ACTION } from '../constants/left-action';

interface IFile {
  name: FileSchemaName;
  selectedAction: ACTION;
}

const initialState: IFile = {
  name: FileSchemaName.About,
  selectedAction: ACTION.Files,
};

const useFileStore = create<IFile>((set) => {
  return {
    ...initialState,
  };
});

const setFileName = (fileName: FileSchemaName): void => {
  useFileStore.setState(() => ({ name: fileName }));
};

const setAction = (action: ACTION): void => {
  useFileStore.setState(() => ({ selectedAction: action }));
};

export default useFileStore;

export { setFileName, setAction };
