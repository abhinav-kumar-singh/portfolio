import { FileSchemaName } from './files.types';

const SKILL_GROUPS = [
  {
    title: 'Frontend',
    skills: [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'Zustand',
      'Redux',
      'React Query',
      'CSS Modules',
      'Tailwind CSS',
      'Sass',
      'Framer Motion',
      'MUI',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma',
      'REST APIs',
      'JWT Authentication',
      'Docker',
    ],
  },
  {
    title: 'Architecture',
    skills: [
      'Micro-frontends (Module Federation)',
      'Design Systems',
      'Feature-flagged Rollouts',
      'i18n',
    ],
  },
  {
    title: 'AI',
    skills: [
      'Cursor',
      'Claude Code',
      'GitHub Copilot',
      'MCP',
      'Prompt Engineering',
      'Agentic Workflows',
    ],
  },
  {
    title: 'Quality',
    skills: [
      'Jest',
      'React Testing Library',
      'Storybook',
      'Test-Driven Development',
      'WCAG/ARIA',
      'Core Web Vitals',
      'New Relic',
      'Sentry',
    ],
  },
  {
    title: 'Build',
    skills: [
      'Rspack',
      'Webpack',
      'Vite',
      'GitHub Actions',
      'semantic-release',
      'ESLint & Prettier',
      'Git',
    ],
  },
];

const SKILLS = {
  frontend: SKILL_GROUPS[0].skills,
  backend: SKILL_GROUPS[1].skills,
  architecture: SKILL_GROUPS[2].skills,
  ai: SKILL_GROUPS[3].skills,
  quality: SKILL_GROUPS[4].skills,
  build: SKILL_GROUPS[5].skills,
  pageName: FileSchemaName.Skills,
};

const PROJECTS = {
  projects: [
    {
      title: 'QuerySonar',
      description:
        'A full-stack SaaS that probes 6+ AI engines (ChatGPT, Perplexity, Gemini, Claude) via multi-provider LLM routing to measure brand share of voice and generate AI-driven optimization playbooks.',
      technologies: [
        'Next.js 15',
        'TypeScript',
        'Tailwind CSS',
        'Prisma',
        'PostgreSQL',
        'Auth.js',
        'OpenRouter',
        'Recharts',
      ],
      link: 'https://www.querysonar.com/',
    },
    {
      title: 'MicMorph',
      description:
        'A cross-platform desktop app for Mac and Windows that pitch-shifts the mic in real time through a Rust DSP pipeline, routed to a virtual audio device for Zoom, Meet, and Slack. Audio stays fully on-device.',
      technologies: [
        'Tauri v2',
        'Rust',
        'JavaScript',
        'Vite',
        'Web Audio API',
        'GitHub Actions',
      ],
      link: 'https://micmorph.work/',
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
      position: 'Software Engineer',
      company: 'Simpplr',
      duration: 'August 2025 - Present',
      responsibilities: [
        'Spearheaded the architecture and delivery of a standalone micro-frontend using Module Federation, Vite, and Storybook. It replaced the legacy site content experience and is consumed across multiple teams, with feature-flagged rollout and automated semantic versioning.',
        'Achieved a 70% reduction in open bugs (500+ to under 150 within 45 days) by driving root-cause fixes, backlog triage, and New Relic observability with PM and Design.',
        'Engineered a fault-tolerant real-time auto-save system for editors, using throttled persistence and deep-diff change detection to eliminate redundant API calls and protect live content through draft isolation.',
        'Handled a multilingual content translation pipeline with locale and dialect support, adding compatibility-based routing between machine and manual translation and publish-time safeguards against overwriting translations.',
        'Championed WCAG accessibility compliance across the site content experience, with screen-reader announcements, ARIA landmarks and labels, and keyboard focus management.',
      ],
    },
    {
      position: 'Senior Software Engineer',
      company: 'LeadSquared',
      duration: 'April 2023 - July 2025',
      responsibilities: [
        'Optimized product performance by reducing initial load time from 12 seconds to 5 seconds, improving retention and satisfaction.',
        'Integrated New Relic monitoring across core modules, enabling real-time tracking and reducing crash resolution time by 50%.',
        'Developed and implemented critical features across 10+ modules, ensuring a seamless experience across devices.',
        'Collaborated with cross-functional teams to integrate new features and keep the product consistent.',
        'Conducted code reviews, keeping quality high and delivery aligned with best practices.',
      ],
    },
    {
      position: 'Associate Software Development Engineer',
      company: 'LeadSquared',
      duration: 'October 2022 - March 2023',
      responsibilities: [
        'Engineered advanced search used by 10k+ users a month, helping make it one of Marvin’s top-selling features.',
        'Led Calendar module improvements that raised retention among US users by 30% and cut scheduling support tickets by 40%.',
        'Collaborated closely with designers and backend teams to integrate features cleanly.',
        'Provided direct customer support, resolving issues and improving satisfaction.',
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

const CONTACT = {
  email: 'singhankur111968@gmail.com',
  phone: '+91-6387498289',
  linkedin: 'https://www.linkedin.com/in/abhinav-singh-602934267',
  pageName: FileSchemaName.Contact,
};

const DEVELOPER = {
  name: 'Abhinav Kumar Singh',
  title: 'Fullstack Developer',
  location: 'Gurgaon, India',
  summary:
    'I build fullstack products with React, TypeScript, and the services behind them. That includes AI features used by 10k+ people, and a micro-frontend shared across teams.',
  education: 'KIIT, B.Tech Computer Science, CGPA 9.25',
  awards: [
    {
      label: 'Spotlight award for a critical feature delivered ahead of schedule',
      href: 'https://drive.google.com/file/d/1nUzZXWQ0LtCgIscaiZtDWn9RXzK_2irk/view',
    },
    {
      label: 'Spotlight award for resolving high-priority customer issues',
      href: 'https://drive.google.com/file/d/1YmCspyEuRbPcZSxO5IIAhD_p0TwVa_72/view',
    },
  ],
  bio: "I'm a fullstack developer with 4+ years of experience building high-performance, scalable web applications with React, TypeScript, and modern web technologies. I've shipped AI and LLM-driven features used by 10k+ people, cut load times by 75%+, and delivered work across 10+ modules. I use Claude Code, Copilot, and MCP daily to move faster on delivery, review, and testing. I graduated from KIIT with a B.Tech in Computer Science Engineering (CGPA 9.25).",
  interests: [
    'I care about fullstack product work: React and TypeScript on the client, and Node, PostgreSQL, and Prisma when the feature needs a service behind it.',
    'I like building micro-frontends, design systems, and feature-flagged rollouts that other teams can actually consume.',
    'I use AI tooling (Cursor, Claude Code, Copilot, MCP) to speed up delivery, code review, and testing, and I ship LLM-backed features when they earn their place.',
    'I keep pushing on performance, Core Web Vitals, and WCAG accessibility so the product stays fast and usable.',
    "Apart from coding, I enjoy watching anime, with 'One Piece', 'Naruto' and 'Grand Blue Dreaming' being some of my favorites.",
  ],
  pageName: FileSchemaName.About,
};

const ALL_PAGES = [SKILLS, PROJECTS, EXPERIENCES, DEVELOPER, CONTACT];

export { SKILL_GROUPS, SKILLS, PROJECTS, EXPERIENCES, DEVELOPER, CONTACT, ALL_PAGES };
