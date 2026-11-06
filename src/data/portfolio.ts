// ============================================================
//  EDIT THIS FILE ONLY — all site content lives here.
//  Replace every placeholder with your real information.
// ============================================================

export const profile = {
  name: "Ahmad Fa'idh Rifa'i",
  role: "Software Engineer & Full-Stack Web Developer",
  tagline:
    "I build reliable, fast and user-friendly web applications — from clean APIs to polished interfaces.",
  location: "South Tangerang, Indonesia",
  email: "ahmadfaidh2003@gmail.com",
  siteUrl: "https://ahmad-portfolio.vercel.app", // update after your first deploy
  resumeUrl: "/resume.pdf", // put your PDF in /public/resume.pdf
  openToWork: true,
  openToWorkText: "Open to Software Engineering & Web Developers Roles",
  socials: {
    github: "https://github.com/vion-15",
    linkedin: "https://www.linkedin.com/in/ahmad-f-bb4372209/9",
  },
};

export const about = {
  paragraphs: [
    "I'm a Computer Science graduate with a strong interest in Software Engineering and Full-Stack Web Development. I enjoy building web applications, exploring new technologies, and solving problems through software development.",
    "I'm continuously improving my technical skills through hands-on projects and self-learning, with a focus on writing clean, maintainable code and developing practical solutions.",
  ],
  highlights: [
    { label: "Years of experience on Programming", value: "2+" },
    { label: "Technologies Used", value: "15+" },
    { label: "Github Repositories", value: "20+" },
  ],
};

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go", "SQL", "No-SQL"] },
  { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Redux", "Open Telemetry", "Library Components"] },
  { title: "Backend", items: ["Node.js", "Express", "NestJS", "REST", "GraphQL", "Middleware", "Nginx", "Fast"] },
  { title: "Data", items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Cloudinary"] },
  { title: "DevOps & Tools", items: ["Docker", "GitHub Actions", "Vercel", "AWS", "Git"] },
];

export type Project = {
  title: string;
  description: string;
  impact?: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [

  {
    title: "Travel Destination Recommendation System",
    description:
      "A full-stack web application that helps users discover and explore tourist destinations through a content-based recommendation system powered by Transformer-based text embeddings.",
    impact: "Content-Based Filtering · AI-Powered Recommendations",
    tags: [
      "Next.js",
      "TypeScript",
      "Go",
      "Gin",
      "PostgreSQL",
      "FastAPI",
      "Docker",
    ],
    github: "https://github.com/vion-15/Tourist-Destination-Recommendation-System",
    featured: true,
  },
  {
    title: "Cafe Point of Sale System",
    description:
      "A web-based point-of-sale application designed to streamline cafe operations, manage product data, process customer orders, and simplify transaction management.",
    impact: "Sales Management · Order Processing",
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/vion-15/Point-Of-Sale-for-cafe",
    featured: true,
  },
  {
    title: "Blog Application",
    description:
      "A full-stack blogging platform that allows users to create, publish, edit, and manage blog posts, featuring user authentication, content management, and image storage integration.",
    impact: "CRUD Operations · Authentication · Content Management",
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase Storage",
    ],
    github: "https://github.com/vion-15/Blog-app",
    featured: true,
  },
];

export const education = [
  {
    school: "Pamulang University",
    degree: "B.Sc. in Computer Science",
    period: "2022 – 2026",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
