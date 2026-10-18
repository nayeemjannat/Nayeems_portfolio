export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  live: string;
  github: string;
  featured: boolean;
  inProgress?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Hero.io — App Store Platform',
    description: 'Fully responsive multi-page app store with nested routing, interactive rating charts, and smooth user experience.',
    image: '/projects/hero-apps.png',
    tags: ['React', 'React Router', 'Tailwind', 'Recharts'],
    live: 'https://hero-apps-store.vercel.app',
    github: 'https://github.com/nayeemjannat',
    featured: true,
  },
  {
    id: 2,
    title: 'Customer Support Zone',
    description: 'Real-time ticket management dashboard. Agents process and resolve support tickets with live count tracking.',
    image: '/projects/support.png',
    tags: ['React', 'Tailwind', 'DaisyUI', 'State Management'],
    live: 'https://customer-support-zone-steel.vercel.app',
    github: 'https://github.com/nayeemjannat',
    featured: true,
  },
  {
    id: 3,
    title: 'MERN E-Commerce Platform',
    description: 'Full-stack e-commerce with auth, cart, admin panel, and AI-powered product recommendations.',
    image: '/projects/ecommerce-placeholder.png', // We can create a placeholder or use another generated image
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    live: '',
    github: 'https://github.com/nayeemjannat',
    featured: false,
    inProgress: true,
  },
]
