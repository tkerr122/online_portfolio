// This is a Server Component
import { getExperienceData } from '@/hooks/useDataFetching';
import ExperiencePage from '@/components/Pages/ExperiencePage';

export const metadata = {
  title: 'Experience | Theo Portfolio',
  description: 'My professional work experience and career highlights',
};

export default async function Experience() {
  // Server-side data fetching
  const experienceData = await getExperienceData();
  
  // Pass data to client component
  return <ExperiencePage experienceData={experienceData} />;
} 