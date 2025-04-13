// This is a Server Component
import { getProfileData, getProjectsData, getSkillsData } from '@/hooks/useDataFetching';
import HomePage from '@/components/Pages/HomePage';
import { unstable_noStore as noStore } from 'next/cache';

// Add dynamic metadata for the homepage
export async function generateMetadata() {
  const profileData = await getProfileData();
  return {
    title: `${profileData.name} | ${profileData.title}`,
    description: profileData.description,
  };
}

export default async function Home() {
  // Opt out of static rendering for dynamic data
  noStore();
  
  // Server-side data fetching
  const profileData = await getProfileData();
  const projectsData = await getProjectsData();
  const skillsData = await getSkillsData();
  
  // Get featured projects
  const featuredProjects = projectsData.filter(project => project.featured);

  // Pass all data to a Client Component that handles the UI
  return (
    <HomePage
      profileData={profileData}
      featuredProjects={featuredProjects}
      skillsData={skillsData}
    />
  );
} 