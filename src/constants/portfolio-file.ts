import { FileName, FileSchemaName } from './files.types';

const PORTFOLIO_FILES = [
  {
    id: 1,
    label: FileName[FileSchemaName.About],
    value: FileSchemaName.About,
  },
  {
    id: 2,
    label: FileName[FileSchemaName.Skills],
    value: FileSchemaName.Skills,
  },
  {
    id: 3,
    label: FileName[FileSchemaName.Projects],
    value: FileSchemaName.Projects,
  },
  {
    id: 4,
    label: FileName[FileSchemaName.Experience],
    value: FileSchemaName.Experience,
  },
];

const CONTACT_FILES = [
  {
    id: 1,
    label: FileName[FileSchemaName.Contact],
    value: FileSchemaName.Contact,
  },
];

export default PORTFOLIO_FILES;
export { CONTACT_FILES };
