export interface Skill {
  name: string;
  category: 'Frontend' | 'Learning' | 'Tools';
  icon: string;
  color: string;
}

export const skills: Skill[] = [
  // ── Frontend ──────────────────────────────────────────────────
  { name: 'HTML5',       category: 'Frontend',  icon: 'FaHtml5',       color: '#E34F26' },
  { name: 'CSS3',        category: 'Frontend',  icon: 'FaCss3Alt',     color: '#1572B6' },
  { name: 'JavaScript',  category: 'Frontend',  icon: 'SiJavascript',  color: '#F7DF1E' },
  { name: 'React.js',    category: 'Frontend',  icon: 'FaReact',       color: '#61DAFB' },
  { name: 'Next.js',     category: 'Frontend',  icon: 'SiNextdotjs',   color: '#FFFFFF' },
  { name: 'Tailwind',    category: 'Frontend',  icon: 'SiTailwindcss', color: '#38BDF8' },

  // ── Backend (Learning) ─────────────────────────────────────────
  { name: 'Node.js',     category: 'Learning',  icon: 'FaNodeJs',      color: '#68A063' },
  { name: 'MongoDB',     category: 'Learning',  icon: 'SiMongodb',     color: '#4DB33D' },
  { name: 'Express.js',  category: 'Learning',  icon: 'SiExpress',     color: '#A0A0A0' },

  // ── Tools ──────────────────────────────────────────────────────
  { name: 'Git',         category: 'Tools',     icon: 'FaGitAlt',      color: '#F05032' },
  { name: 'GitHub',      category: 'Tools',     icon: 'FaGithub',      color: '#A0A0A0' },
  { name: 'VS Code',     category: 'Tools',     icon: 'VscVscode', color: '#007ACC' },
]
