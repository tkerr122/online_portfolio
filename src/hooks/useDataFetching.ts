import { Profile, Project, Experience, SkillCategory } from '@/types';

// Helper function to get base URL with fallback
const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_BASE_URL || '';
}

// Server-side data fetching functions
// These can be imported and used directly in Server Components

export async function getProfileData(): Promise<Profile> {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/profile`, { 
    next: { revalidate: 3600 } // Revalidate every hour
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch profile data');
  }
  
  return res.json();
}

export async function getProjectsData(): Promise<Project[]> {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/projects`, { 
    next: { revalidate: 3600 }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch projects data');
  }
  
  return res.json();
}

export async function getExperienceData(): Promise<Experience[]> {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/experience`, { 
    next: { revalidate: 3600 }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch experience data');
  }
  
  return res.json();
}

export async function getSkillsData(): Promise<SkillCategory[]> {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/skills`, { 
    next: { revalidate: 3600 }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch skills data');
  }
  
  return res.json();
} 