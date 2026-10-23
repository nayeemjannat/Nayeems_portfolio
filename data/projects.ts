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
    title: 'HERO.IO — App Store',
    description: 'Fully responsive multi-page app store with nested routing, interactive rating charts, and smooth user experience.',
    image: '/projects/hero-apps.png',
    tags: ['React 19', 'Vite', 'React Router', 'Tailwind CSS', 'DaisyUI', 'Recharts', 'React Toastify'],
    live: 'https://hero-apps-store.vercel.app',
    github: 'https://github.com/nayeemjannat/Hero-apps-store',
    featured: true,
  },
  {
    id: 2,
    title: 'ShopWave — Multi-Vendor E-Commerce Platform',
    description: 'E-commerce platform with dedicated sign-in options for customers, shop owners, and admins.',
    image: '/projects/shop-wave.svg',
    tags: ['React 18', 'Vite', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Cloudinary', 'SSLCommerz'],
    live: 'https://shop-wave-ebon.vercel.app/login',
    github: 'https://github.com/nayeemjannat/ShopWave',
    featured: true,
  },
  {
    id: 3,
    title: 'Fraud Customer Detection — SmartShop Order Risk Dashboard',
    description: 'E-commerce order management platform with customer authentication and fraud detection.',
    image: '/projects/smartshop-fraud-detection.svg',
    tags: ['React 18', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'bcryptjs', 'Recharts'],
    live: 'https://fraud-customer-detection.vercel.app/login',
    github: 'https://github.com/nayeemjannat',
    featured: false,
  },
]
