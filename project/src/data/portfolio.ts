import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code2,
  Database,
  Brain,
  Layout,
  Server,
  GitBranch,
  Send,
  Layers,
  GraduationCap,
  Award,
  BookOpen,
  Hospital,
  Cpu,
  Cloud,
  FileCode2,
  Boxes,
  Wrench,
  Terminal,
  ShieldCheck,
  Trophy,
  Users,
  UserCog,
  CalendarDays,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const personal = {
  name: 'Yasogan S',
  title: 'Java Full Stack Developer | Spring Boot | React | REST APIs | AI Applications',
  shortTitle: 'Java Full Stack Developer',
  heroHeadline: 'Java Full Stack Developer\nBuilding Modern Web & Backend Solutions',
  heroSubtext:
    'Computer Science Engineering student focused on Java, Spring Boot, React, REST APIs, and modern full-stack application development with AI-powered features.',
  statusBadge: 'Open to Software Development Opportunities',
  phone: '7904001969',
  email: 'yasogan1117@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yasogan-saravanan',
  github: 'https://github.com/Yasogan117',
  location: 'Tamil Nadu, India',
  profileImage:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
};

export const summary = `Aspiring Java Full Stack Developer with a strong foundation in Java, Spring Boot, React, REST APIs, MySQL, and PostgreSQL. Skilled in OOPs, Collections Framework, Exception Handling, and Data Structures & Algorithms. Hands-on experience building full-stack applications and integrating Spring AI, RAG, MCP, Ollama, and Google Gemini API for AI-powered solutions. Strong understanding of CRUD operations, database connectivity, layered architecture, and end-to-end software development with a passion for building efficient, scalable, and maintainable applications.`;

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: personal.linkedin, icon: Linkedin },
  { label: 'GitHub', href: personal.github, icon: Github },
  { label: 'Email', href: `mailto:${personal.email}`, icon: Mail },
];

export const aboutHighlights = [
  { label: 'Java Backend Development', icon: Server },
  { label: 'Spring Boot', icon: Cpu },
  { label: 'REST APIs', icon: Layers },
  { label: 'Database Integration', icon: Database },
  { label: 'AI & Generative AI', icon: Brain },
  { label: 'Problem Solving', icon: Code2 },
  { label: 'Continuous Learning', icon: BookOpen },
];

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: Code2,
    skills: ['Java'],
  },
  {
    title: 'Core Concepts',
    icon: Brain,
    skills: ['OOP', 'Collections Framework', 'Exception Handling', 'Data Structures & Algorithms'],
  },
  {
    title: 'Backend & Technologies',
    icon: Server,
    skills: ['Spring Boot', 'Spring Data JPA', 'Hibernate', 'REST APIs'],
  },
  {
    title: 'AI & Generative AI',
    icon: Brain,
    skills: ['Spring AI', 'RAG', 'MCP', 'Ollama', 'Google Gemini API'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    title: 'Build Tool',
    icon: Boxes,
    skills: ['Maven'],
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    skills: ['Git', 'GitHub'],
  },
  {
    title: 'API Testing',
    icon: Send,
    skills: ['Postman'],
  },
  {
    title: 'Development Tools',
    icon: Terminal,
    skills: ['IntelliJ IDEA', 'Spring Tool Suite', 'VS Code', 'Eclipse'],
  },
];

export type Project = {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  stack: string[];
  features: string[];
  highlights: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: 'book-management',
    title: 'Book Management Store System',
    icon: BookOpen,
    description:
      'Developed a full-stack Book Management System using Spring Boot, REST APIs, Spring Data JPA, Hibernate, PostgreSQL, and JavaScript.',
    stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
    features: [
      'CRUD operations',
      'Database integration',
      'Book record management',
      'User-friendly web interface',
      'REST API architecture',
    ],
    highlights: [
      'Layered Spring Boot architecture (Controller, Service, Repository)',
      'Hibernate ORM mapping with PostgreSQL',
      'RESTful endpoints for complete book record lifecycle',
    ],
  },
  {
    id: 'hospital-management',
    title: 'Hospital Management System',
    icon: Hospital,
    description:
      'Developed a Spring Boot REST API for managing patients, doctors, appointments, and medical records.',
    stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'REST API', 'Postman'],
    features: [
      'Patient management',
      'Doctor management',
      'Appointment management',
      'Medical record management',
      'CRUD operations',
      'Spring Data JPA integration',
      'Postman API testing',
    ],
    highlights: [
      'Domain-driven REST API for four interconnected entities',
      'Spring Data JPA repositories with MySQL persistence',
      'Postman-tested endpoints covering all CRUD flows',
    ],
  },
    // ================= 3rd PROJECT =================
  {
    id: 'ai-trip-planner',
    title: 'AI Trip Planner',
    icon: Brain,
    description:
      'Developed an AI-powered Trip Planner using Java, Spring Boot, REST APIs, and PostgreSQL to generate personalized travel plans based on user preferences and destination details.',
    stack: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'PostgreSQL',
      'AI Integration',
    ],
    features: [
      'AI-powered trip planning',
      'Personalized travel recommendations',
      'Destination-based itinerary generation',
      'Trip information management',
      'REST API integration',
      'PostgreSQL database integration',
    ],
    highlights: [
      'Built backend services using Java and Spring Boot',
      'Integrated AI features for personalized trip planning',
      'Designed REST APIs for managing travel information',
      'Used PostgreSQL for persistent data storage',
    ],
  },

  // ================= 4th PROJECT =================
  {
    id: 'banking-management',
    title: 'Banking Management System',
    icon: Database,
    description:
      'Developed a Banking Management System using Java, Spring Boot, REST APIs, and PostgreSQL to manage customer accounts, banking transactions, and essential banking operations.',
    stack: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'PostgreSQL',
    ],
    features: [
      'Customer account management',
      'Bank account creation',
      'Deposit operations',
      'Withdrawal operations',
      'Balance management',
      'Transaction management',
      'CRUD operations',
      'Database integration',
    ],
    highlights: [
      'Built backend functionality using Java and Spring Boot',
      'Created REST APIs for banking operations',
      'Managed customer, account, and transaction records',
      'Integrated PostgreSQL for data persistence',
    ],
  },

  // ================= 5th PROJECT =================
  {
    id: 'student-report-card',
    title: 'Student Application / Report Card System',
    icon: GraduationCap,
    description:
      'Developed a Student Application and Report Card System using Java, Spring Boot, REST APIs, and PostgreSQL to manage student details, academic marks, results, averages, and grades.',
    stack: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'PostgreSQL',
    ],
    features: [
      'Student registration',
      'Student record management',
      'Add, view, update and delete student details',
      'Subject marks management',
      'Total marks calculation',
      'Average calculation',
      'Grade management',
      'Database integration',
    ],
    highlights: [
      'Implemented CRUD operations using Spring Boot REST APIs',
      'Developed total, average, and grade calculation logic',
      'Managed student academic records using PostgreSQL',
      'Built a structured backend using Java and Spring Boot',
    ],
  },
];

export const backendFlow = [
  { label: 'Java', icon: Code2 },
  { label: 'Spring Boot', icon: Server },
  { label: 'REST APIs', icon: Layers },
  { label: 'Business Logic', icon: Cpu },
  { label: 'Spring Data JPA / Hibernate', icon: Database },
  { label: 'Database', icon: Database },
];

export const aiTechnologies = [
  { label: 'Spring AI', icon: Cpu },
  { label: 'RAG', icon: Brain },
  { label: 'MCP', icon: Cloud },
  { label: 'Ollama', icon: Brain },
  { label: 'Google Gemini API', icon: Cloud },
];

export type EducationItem = {
  degree: string;
  institution: string;
  detail: string;
  icon: LucideIcon;
};

export const education: EducationItem[] = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Muthayammal College of Engineering, Rasipuram, Namakkal',
    detail: 'Expected Graduation: 2027 · CGPA: 8.40 / 10',
    icon: GraduationCap,
  },
  {
    degree: 'Higher Secondary Certificate',
    institution: 'Government Boys Higher Secondary School, Pochampalli',
    detail: '78.33%',
    icon: FileCode2,
  },
  {
    degree: 'Secondary School Leaving Certificate',
    institution: 'Government Boys Higher Secondary School, Pochampalli',
    detail: '100%',
    icon: Award,
  },
];

export type Certification = {
  title: string;
  issuer: string;
  icon: LucideIcon;
};

export const certifications: Certification[] = [
  { title: 'Java Programming', issuer: 'Simplilearn SkillUp', icon: Code2 },
  { title: 'Youth Leadership Program', issuer: 'ICT Academy', icon: Users },
  { title: 'Learnathon Program', issuer: 'ICT Academy', icon: BookOpen },
  { title: 'HackIndia 2025 — Web3 & AI Hackathon', issuer: 'HackIndia', icon: Trophy },
];

export const achievement = {
  title: 'Best Outstanding Student Award (2026)',
  institution: 'Muthayammal College of Engineering',
  icon: Trophy,
};

export const leadershipRoles = [
  { label: 'Class Representative', icon: UserCog },
  { label: 'Group Leader', icon: Users },
  { label: 'Event & Academic Coordinator', icon: CalendarDays },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Backend + AI', href: '#backend-ai' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const contactInfo = [
  { label: personal.email, href: `mailto:${personal.email}`, icon: Mail },
  { label: personal.phone, href: `tel:${personal.phone}`, icon: Phone },
  { label: 'LinkedIn', href: personal.linkedin, icon: Linkedin },
  { label: 'GitHub', href: personal.github, icon: Github },
];

export const footerText = '© 2026 Yasogan S. Built with React.';

export const sectionMeta = {
  about: { title: 'About Me', icon: UserCog },
  skills: { title: 'Technical Skills', icon: Code2 },
  projects: { title: 'Projects', icon: Layers },
  backendAI: { title: 'Backend + AI', icon: Server },
  education: { title: 'Education', icon: GraduationCap },
  certifications: { title: 'Certifications', icon: Award },
  achievements: { title: 'Achievements & Leadership', icon: Trophy },
  contact: { title: "Let's Build Something Together", icon: Mail },
};

export const heroCodeLines = [
  { text: '@SpringBootApplication', color: 'text-cyan-300' },
  { text: 'public class Application {', color: 'text-gray-200' },
  { text: '  public static void main(String[] a) {', color: 'text-gray-200' },
  { text: '    SpringApplication.run(Application.class);', color: 'text-blue-300' },
  { text: '  }', color: 'text-gray-200' },
  { text: '}', color: 'text-gray-200' },
];

export const heroApiLines = [
  { text: 'GET    /api/books', color: 'text-emerald-300' },
  { text: 'POST   /api/books', color: 'text-cyan-300' },
  { text: 'PUT    /api/books/{id}', color: 'text-amber-300' },
  { text: 'DELETE /api/books/{id}', color: 'text-rose-300' },
];

export const heroAiLines = [
  { text: 'SpringAI.chat("...")', color: 'text-cyan-300' },
  { text: '  .model("gemini")', color: 'text-blue-300' },
  { text: '  .rag(vectorStore)', color: 'text-purple-300' },
  { text: '  .stream();', color: 'text-emerald-300' },
];
