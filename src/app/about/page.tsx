// This is a Server Component
import { getProfileData, getSkillsData } from '@/hooks/useDataFetching';
import AboutPage from '@/components/Pages/AboutPage';

export const metadata = {
  title: 'About | Theo Portfolio',
  description: 'Learn more about me, my skills, and my background',
};

export default async function About() {
  // Server-side data fetching
  const profileData = await getProfileData();
  const skillsData = await getSkillsData();
  
  // Pass data to client component
  return <AboutPage profileData={profileData} skillsData={skillsData} />;
} 