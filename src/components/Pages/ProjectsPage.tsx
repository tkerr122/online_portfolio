'use client';

import styled from 'styled-components';
import Section from '@/components/common/Section';
import ProjectCard from '@/components/Projects/ProjectCard';
import type { Project } from '@/types';

interface ProjectsPageProps {
  projectsData: Project[];
}

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function ProjectsPage({ projectsData }: ProjectsPageProps) {
  return (
    <Section
      title="My Projects"
      subtitle="A showcase of my latest work and personal projects"
    >
      <ProjectsGrid>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsGrid>
    </Section>
  );
} 