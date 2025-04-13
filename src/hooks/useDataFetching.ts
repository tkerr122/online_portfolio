import { Profile, Project, Experience, SkillCategory } from '@/types';
import { profileData as defaultProfileData, projectsData as defaultProjectsData, experienceData as defaultExperienceData, skillsData as defaultSkillsData } from '@/data';

// Helper function to get base URL with fallback
const getBaseUrl = () => {
  // Check if we're in the browser
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  
  // For server-side, try to use env vars
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  
  // Fallback for local development
  return process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
}

// Fallback data if not already imported
const fallbackProfile = defaultProfileData || {
  name: 'Theo',
  title: 'Full Stack Developer',
  description: 'Full Stack Developer specializing in modern web technologies',
  email: 'contact@example.com',
  phone: '',
  location: 'New York, NY',
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  avatar: '/placeholder-avatar.png',
  resume: '/resume.pdf'
};

// Server-side data fetching functions
// These can be imported and used directly in Server Components

export async function getProfileData(): Promise<Profile> {
  // Fast path: if we're in Vercel's production and have the default data, use it
  if (process.env.VERCEL_ENV === 'production' && defaultProfileData) {
    return defaultProfileData as Profile;
  }

  const baseUrl = getBaseUrl();
  try {
    // Use absolute URL for API calls in production
    const url = baseUrl ? `${baseUrl}/api/profile` : '/api/profile';
    const res = await fetch(url, { 
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch profile data: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching profile data:', error);
    return fallbackProfile as Profile;
  }
}

export async function getProjectsData(): Promise<Project[]> {
  // Fast path for Vercel production
  if (process.env.VERCEL_ENV === 'production' && defaultProjectsData) {
    return defaultProjectsData as Project[];
  }

  const baseUrl = getBaseUrl();
  try {
    const url = baseUrl ? `${baseUrl}/api/projects` : '/api/projects';
    const res = await fetch(url, { 
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch projects data: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching projects data:', error);
    return defaultProjectsData || [];
  }
}

export async function getExperienceData(): Promise<Experience[]> {
  // Fast path for Vercel production
  if (process.env.VERCEL_ENV === 'production' && defaultExperienceData) {
    return defaultExperienceData as Experience[];
  }

  const baseUrl = getBaseUrl();
  try {
    const url = baseUrl ? `${baseUrl}/api/experience` : '/api/experience';
    const res = await fetch(url, { 
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch experience data: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching experience data:', error);
    return defaultExperienceData || [];
  }
}

export async function getSkillsData(): Promise<SkillCategory[]> {
  // Fast path for Vercel production
  if (process.env.VERCEL_ENV === 'production' && defaultSkillsData) {
    return defaultSkillsData as SkillCategory[];
  }

  const baseUrl = getBaseUrl();
  try {
    const url = baseUrl ? `${baseUrl}/api/skills` : '/api/skills';
    const res = await fetch(url, { 
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch skills data: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching skills data:', error);
    return defaultSkillsData || [];
  }
} 