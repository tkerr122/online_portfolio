import { Profile, Project, Experience, SkillCategory } from '@/types';
import { 
  getStaticProfileData, 
  getStaticProjectsData, 
  getStaticExperienceData, 
  getStaticSkillsData 
} from '@/utils/staticData';

// Helper function to get base URL with fallback
const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_BASE_URL || '';
}

// Server-side data fetching functions
// These can be imported and used directly in Server Components

export async function getProfileData(): Promise<Profile> {
  // When using static export, return data directly
  if (process.env.NODE_ENV === 'production') {
    return getStaticProfileData();
  }
  
  // In development, can still use API route
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
  const res = await fetch(`${baseUrl}/api/profile`, { 
    next: { revalidate: 3600 } // Revalidate every hour
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch profile data');
  }
  
  return res.json();
}

export async function getProjectsData(): Promise<Project[]> {
  // When using static export, return data directly
  if (process.env.NODE_ENV === 'production') {
    return getStaticProjectsData();
  }
  
  // In development, can still use API route
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
  const res = await fetch(`${baseUrl}/api/projects`, { 
    next: { revalidate: 3600 }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch projects data');
  }
  
  return res.json();
}

export async function getExperienceData(): Promise<Experience[]> {
  // When using static export, return data directly
  if (process.env.NODE_ENV === 'production') {
    return getStaticExperienceData();
  }
  
  // In development, can still use API route
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
  const res = await fetch(`${baseUrl}/api/experience`, { 
    next: { revalidate: 3600 }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch experience data');
  }
  
  return res.json();
}

export async function getSkillsData(): Promise<SkillCategory[]> {
  // When using static export, return data directly
  if (process.env.NODE_ENV === 'production') {
    return getStaticSkillsData();
  }
  
  // In development, can still use API route
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
  const res = await fetch(`${baseUrl}/api/skills`, { 
    next: { revalidate: 3600 }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch skills data');
  }
  
  return res.json();
} 