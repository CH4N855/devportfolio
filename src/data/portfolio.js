export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Study', href: '#study' },
];

export const stats = [
  { num: '4+', label: 'Years Exp.' },
  { num: '32', label: 'Projects Done' },
  { num: '18', label: 'Happy Clients' },
];

export const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js',
  'PostgreSQL', 'MongoDB', 'GraphQL', 'Docker',
  'AWS', 'Tailwind CSS', 'Git / CI', 'Figma',
];

export const info = [
  { label: 'Name', value: 'Keo kimchan' },
  { label: 'Role', value: 'Full-Stack Developer' },
  { label: 'Location', value: 'Cambodia' },
  { label: 'Availability', value: '● Open to work', accent: true },
];

export const experiences = [
  {
    date: '2023 — Present',
    company: 'Luminary Labs',
    role: 'Senior Frontend Engineer',
    desc: 'Leading frontend architecture for a SaaS platform serving 50K+ users. Built a shared design system from scratch, reduced bundle size by 40%, and mentored 3 junior developers through code reviews and pair programming.',
    tags: ['React', 'TypeScript', 'Storybook', 'Vite'],
  },
  {
    date: '2021 — 2023',
    company: 'Stackwave Agency',
    role: 'Full-Stack Developer',
    desc: 'Delivered 12+ client projects end-to-end, including e-commerce platforms, dashboards, and marketing sites. Integrated third-party APIs, managed PostgreSQL databases, and set up CI/CD pipelines.',
    tags: ['Node.js', 'Next.js', 'PostgreSQL', 'Stripe'],
  },
  {
    date: '2020 — 2021',
    company: 'Pixel & Co.',
    role: 'Junior Web Developer',
    desc: 'Built responsive landing pages and web apps for startups. Collaborated closely with design teams to translate Figma mockups into production-ready code, ensuring cross-browser compatibility and accessibility.',
    tags: ['Vue.js', 'SCSS', 'Figma', 'WordPress'],
  },
];

export const projects = [
  {
    num: '01',
    icon: '🛒',
    name: 'ShopFlow E-Commerce',
    desc: 'Full-featured online store with real-time inventory, Stripe checkout, admin dashboard, and automated email notifications.',
    stack: ['Next.js', 'Prisma', 'Stripe', 'PostgreSQL'],
    href: '#',
  },
  {
    num: '02',
    icon: '📊',
    name: 'DataPulse Dashboard',
    desc: 'Real-time analytics dashboard for SaaS metrics. Custom charting, WebSocket live updates, and role-based access control.',
    stack: ['React', 'D3.js', 'Node.js', 'Redis'],
    href: '#',
  },
  {
    num: '03',
    icon: '💬',
    name: 'Conversa Chat App',
    desc: 'End-to-end encrypted messaging with real-time rooms, file sharing, and a mobile-first progressive web app experience.',
    stack: ['Socket.io', 'React', 'MongoDB', 'PWA'],
    href: '#',
  },
  {
    num: '04',
    icon: '📝',
    name: 'NoteNest CMS',
    desc: 'Headless CMS for developers. Markdown-first editor, GraphQL API, webhook triggers, and multi-tenant support.',
    stack: ['GraphQL', 'TypeScript', 'Docker', 'AWS S3'],
    href: '#',
  },
  {
    num: '05',
    icon: '🎨',
    name: 'Palette UI Kit',
    desc: 'Open-source React component library with 60+ components, dark mode support, TypeScript types, and Storybook docs.',
    stack: ['React', 'Storybook', 'CSS Modules', 'Rollup'],
    href: '#',
  },
  {
    num: '06',
    icon: '🗺️',
    name: 'TravelMap App',
    desc: 'Interactive travel tracking with custom map markers, trip planning, budget tracker, and sharable itineraries.',
    stack: ['Vue.js', 'Mapbox', 'Firebase', 'Pinia'],
    href: '#',
  },
];

export const education = [
  {
    year: '2016 — 2020',
    degree: 'B.Sc. Computer Science',
    school: 'University of California, Berkeley',
    detail: 'Majored in Software Systems, minor in Human-Computer Interaction. GPA: 3.8. Thesis on reactive state management patterns in modern SPA frameworks.',
  },
  {
    year: '2022 (Part-time)',
    degree: 'UX Design Foundations',
    school: 'Nielsen Norman Group',
    detail: 'Completed 3 intensive courses covering usability principles, information architecture, and accessibility — bridging design and engineering.',
  },
];

export const certifications = [
  { icon: '☁️', name: 'AWS Certified Developer – Associate', issuer: 'Amazon Web Services · 2023' },
  { icon: '⚛️', name: 'Meta Front-End Developer Certificate', issuer: 'Meta / Coursera · 2022' },
  { icon: '🔒', name: 'Google Cybersecurity Certificate', issuer: 'Google / Coursera · 2022' },
  { icon: '📐', name: 'Professional Scrum Master I (PSM I)', issuer: 'Scrum.org · 2021' },
  { icon: '🗄️', name: 'MongoDB Certified Developer', issuer: 'MongoDB University · 2021' },
];
