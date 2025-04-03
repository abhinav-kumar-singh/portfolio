import { FileName, FileSchemaName } from './files.types';

const SKILLS = {
  languages: ['TypeScript', 'JavaScript', 'HTML5', 'CSS/SCSS'],
  frameworks: ['React', 'MUI'],
  styling: [
    'CSS Modules',
    'Styled Components',
    'Responsive Design',
    'Dark Mode & Theming',
  ],
  stateManagement: ['Zustand', 'Redux', 'State Management Optimization'],
  performanceOptimization: [
    'Performance Optimization',
    'Code Splitting',
    'Lazy Loading',
    'Virtualization',
    'React Memoization',
    'Client-Side Caching',
  ],
  tooling: [
    'Rspack',
    'Webpack',
    'Rollup',
    'ESLint & Prettier',
    'Git',
    'GitHub Actions (CI/CD)',
  ],
  testing: ['Jest', 'React Testing Library', 'Test-Driven Development'],
  architecture: [
    'Scalable Frontend Architecture',
    'Micro-Frontend Architecture',
    'Component-Driven Development',
  ],
  advancedUIUX: [
    'Framer Motion',
    'Accessibility',
    'SEO',
    'Web Performance',
    'User Experience',
    'Cross-Browser Support',
    'Cross-Device Compatibility',
  ],
  modernWebAPIs: ['Service Workers', 'IndexedDB & LocalStorage'],
  bestPractices: ['Code Documentation', 'Collaboration', 'Problem Solving'],
  pageName: FileSchemaName.Skills,
};

const PROJECTS = {
  projects: [
    {
      title: 'Portfolio Website',
      description:
        'A VS Code-themed portfolio website showcasing my projects and skills.',
      technologies: ['React', 'TypeScript', 'CSS Modules', 'Zustand', 'Rspack'],
      link: '...',
    },
    {
      title: 'Taskdrift - Task Manager App',
      description:
        'A modern task management web application designed for teams and individuals to streamline task organization, tracking, and collaboration. Features include multiple language support, dark mode, and a responsive UI.',
      technologies: [
        'React',
        'TypeScript',
        'Zustand',
        'MUI',
        'Day.js',
        'Webpack',
      ],
      link: 'https://taskdrift.in',
    },
  ],
  pageName: FileSchemaName.Projects,
};

const EXPERIENCES = {
  experiences: [
    {
      position: 'Software Development Engineer',
      company: 'LeadSquared',
      duration: 'April 2023 - Present',
      responsibilities: [
        'Optimized product performance, reducing initial load time from 12s to 3s, improving user experience significantly.',
        'Engaged with customers to address queries, troubleshoot issues, and provide timely support.',
        'Developed and implemented critical features, ensuring a seamless user experience across multiple devices.',
        'Collaborated with cross-functional teams to integrate new features efficiently and maintain product consistency.',
        'Conducted thorough code reviews, ensuring high-quality code and adherence to best practices.',
      ],
    },
    {
      position: 'Associate Software Development Engineer',
      company: 'LeadSquared',
      duration: 'October 2022 - March 2023',
      responsibilities: [
        'Implemented the advanced search feature, one of the most critical functionalities in the Marvin app.',
        'Collaborated closely with designers and backend teams to ensure seamless feature integration.',
        'Maintained and improved the Calendar feature, significantly contributing to US customer retention.',
        'Provided direct customer support, resolving issues and enhancing user satisfaction.',
      ],
    },
    {
      position: 'Software Developer Intern',
      company: 'LeadSquared',
      duration: 'October 2021 - September 2022',
      responsibilities: [
        'Diagnosed and fixed high-priority bugs, improving platform stability.',
        'Gained experience in code reviews, maintaining code quality, and following best practices.',
        'Developed new features and successfully delivered them to the team.',
      ],
    },
    {
      position: 'Software Engineer Intern',
      company: 'Highradius',
      duration: 'May 2021 - September 2021',
      responsibilities: [
        'Developed an email automation feature to streamline communication processes.',
        'Learned and applied best practices in code quality, reviews, and software development.',
      ],
    },
  ],
  pageName: FileSchemaName.Experience,
};

const DEVELOPER = {
  name: 'Abhinav Kumar Singh',
  title: 'Frontend Developer',
  location: 'Bangalore, Karnataka, India',
  bio: "I'm a passionate frontend developer with a keen eye for design, performance, and a love for creating intuitive, responsive web applications. My journey in web development started 3 years ago, and I've been obsessed with crafting beautiful, fast, and seamless user experiences ever since. I focus on writing efficient, scalable code, optimizing rendering performance, and leveraging best practices to ensure smooth interactions across all devices.",
  interests: [
    'I have a deep passion for frontend development, focusing on performance optimization, state management, and intuitive UI/UX.',
    'I love working with modern web technologies like React, TypeScript, Zustand, and Rspack to build scalable and maintainable applications.',
    'I enjoy optimizing web apps for speed and seamless user experience, ensuring they load fast and perform efficiently across all devices.',
    "I'm always exploring ways to improve rendering performance, reduce bundle size, and enhance accessibility for a better web experience.",
    "Apart from coding, I enjoy watching anime, with 'One Piece', 'Naruto' and 'Grand Blue Dreaming' being one of my favorites",
  ],
  pageName: FileSchemaName.Experience,
};

const ALL_PAGES = [SKILLS, PROJECTS, EXPERIENCES, DEVELOPER];

// const PAGE_MAPPED = {
//   SKILLS: FileName[FileSchemaName.Skills],
//   PROJECTS: FileName[FileSchemaName.Projects],
//   EXPERIENCES: FileName[FileSchemaName.Experience],
//   DEVELOPER: FileName[FileSchemaName.About],
// };

export { SKILLS, PROJECTS, EXPERIENCES, DEVELOPER, ALL_PAGES };
