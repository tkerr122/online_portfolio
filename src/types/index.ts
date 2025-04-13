export interface Profile {
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  avatar: string;
  resume: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ThemeType {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    lightText: string;
    accent: string;
    card: string;
    border: string;
  };
  fonts: {
    main: string;
    heading: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  transition: string;
  borderRadius: string;
  boxShadow: string;
} 