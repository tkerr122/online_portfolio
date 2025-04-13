// This is a Server Component
import { getProjectsData } from '@/hooks/useDataFetching';
import ProjectsPage from '@/components/Pages/ProjectsPage';

export const metadata = {
  title: 'Projects | Theo Portfolio',
  description: 'Explore my projects and portfolio work',
};

export default async function Projects() {
  // Server-side data fetching
  const projectsData = await getProjectsData();
  
  // Pass data to client component
  return <ProjectsPage projectsData={projectsData} />;
} 