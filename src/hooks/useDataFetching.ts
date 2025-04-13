import { Profile, Project, Experience, SkillCategory } from '@/types';

// Helper function to get base URL with fallback
const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_BASE_URL || '';
}

// Fallback data to use when API requests fail
const fallbackProfile: Profile = {
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
  const baseUrl = getBaseUrl();
  try {
    const res = await fetch(`${baseUrl}/api/profile`, { 
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch profile data');
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching profile data:', error);
    return fallbackProfile;
  }
}

export async function getProjectsData(): Promise<Project[]> {
  const baseUrl = getBaseUrl();
  try {
    const res = await fetch(`${baseUrl}/api/projects`, { 
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch projects data');
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching projects data:', error);
    return [];
  }
}

export async function getExperienceData(): Promise<Experience[]> {
  const baseUrl = getBaseUrl();
  try {
    const res = await fetch(`${baseUrl}/api/experience`, { 
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch experience data');
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching experience data:', error);
    return [];
  }
}

export async function getSkillsData(): Promise<SkillCategory[]> {
  const baseUrl = getBaseUrl();
  try {
    const res = await fetch(`${baseUrl}/api/skills`, { 
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch skills data');
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching skills data:', error);
    return [];
  }
} 