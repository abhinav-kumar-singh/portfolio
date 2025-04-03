enum FileSchemaName {
  About = 'about',
  Skills = 'skills',
  Projects = 'projects',
  Contact = 'contact',
  Experience = 'experience',
}

const FileName = {
  [FileSchemaName.About]: 'About.ts',
  [FileSchemaName.Skills]: 'Skills.ts',
  [FileSchemaName.Projects]: 'Projects.ts',
  [FileSchemaName.Contact]: 'Contact.ts',
  [FileSchemaName.Experience]: 'Experiences.ts',
} as const;

export { FileSchemaName, FileName };
