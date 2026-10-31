import { FileSchemaName } from './files.types';
import {
  CONTACT,
  DEVELOPER,
  EXPERIENCES,
  PROJECTS,
  SKILL_GROUPS,
} from './all';

const exportBlock = (label: string, value: unknown): string => {
  return `const ${label} = ${JSON.stringify(value, null, 2)};\n\nexport default ${label};`;
};

const sourceFor = (name: FileSchemaName): string => {
  switch (name) {
    case FileSchemaName.About:
      return exportBlock('developer', {
        name: DEVELOPER.name,
        title: DEVELOPER.title,
        location: DEVELOPER.location,
        summary: DEVELOPER.summary,
        education: DEVELOPER.education,
        awards: DEVELOPER.awards,
        bio: DEVELOPER.bio,
        interests: DEVELOPER.interests,
      });
    case FileSchemaName.Skills:
      return exportBlock(
        'skills',
        Object.fromEntries(
          SKILL_GROUPS.map((group) => [group.title, group.skills]),
        ),
      );
    case FileSchemaName.Projects:
      return exportBlock('projects', PROJECTS.projects);
    case FileSchemaName.Experience:
      return exportBlock('experience', EXPERIENCES.experiences);
    case FileSchemaName.Contact:
      return exportBlock('contact', {
        email: CONTACT.email,
        phone: CONTACT.phone,
        linkedin: CONTACT.linkedin,
        location: DEVELOPER.location,
      });
    default:
      return '';
  }
};

export { sourceFor };
