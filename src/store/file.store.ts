import { create } from 'zustand';
import { FileSchemaName } from '../constants/files.types';
import { ACTION } from '../constants/left-action';

type PreviewMode = 'full' | 'section';

interface IFile {
  name: FileSchemaName;
  selectedAction: ACTION;
  preview: PreviewMode | null;
  logs: string[];
  line: number;
  column: number;
  statusLabel: string;
  running: boolean;
}

const initialState: IFile = {
  name: FileSchemaName.About,
  selectedAction: ACTION.Files,
  preview: null,
  logs: ['abhinav.singh@MACPRO ~ %'],
  line: 1,
  column: 1,
  statusLabel: '',
  running: false,
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

const appendLogs = (lines: string[]): string[] => {
  return [...useFileStore.getState().logs, ...lines].slice(-40);
};

const pushLog = (line: string): void => {
  useFileStore.setState({ logs: appendLogs([line]) });
};

const writePromptCommand = (command: string): void => {
  const prompt = 'abhinav.singh@MACPRO ~ %';
  const logs = [...useFileStore.getState().logs];
  const last = logs[logs.length - 1];
  if (last === prompt) {
    logs[logs.length - 1] = `${prompt} ${command}`;
    useFileStore.setState({ logs });
    return;
  }
  useFileStore.setState({ logs: appendLogs([`${prompt} ${command}`]) });
};

const setCursor = (line: number, column: number): void => {
  useFileStore.setState({ line, column });
};

const setStatusLabel = (statusLabel: string): void => {
  const { running } = useFileStore.getState();
  if (running) {
    return;
  }
  useFileStore.setState({ statusLabel });
};

const setRunning = (running: boolean): void => {
  useFileStore.setState({
    running,
    statusLabel: running ? 'Building…' : 'localhost:3000',
  });
};

const openFullPreview = (): void => {
  useFileStore.setState({ preview: 'full' });
};

const openSectionPreview = (): void => {
  useFileStore.setState({ preview: 'section' });
};

const closePreview = (): void => {
  const { preview, running } = useFileStore.getState();
  if (!preview && !running) {
    return;
  }
  useFileStore.setState({
    preview: null,
    running: false,
    statusLabel: '',
    logs: appendLogs(['abhinav.singh@MACPRO ~ %']),
  });
};

export default useFileStore;

export {
  setFileName,
  setAction,
  openFullPreview,
  openSectionPreview,
  closePreview,
  pushLog,
  writePromptCommand,
  setCursor,
  setStatusLabel,
  setRunning,
};
