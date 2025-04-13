'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { Project } from '@/types';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 0.9rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex: 1;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Tag = styled.span`
  background-color: ${({ theme }) => `${theme.colors.primary}20`};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Links = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const LinkSecondary = styled(Link)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ImageContainer>
        <StyledImage 
          src={project.image || '/images/placeholder.jpg'}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={project.featured}
        />
      </ImageContainer>
      
      <Content>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        
        <Tags>
          {project.technologies.map((tech, index) => (
            <Tag key={index}>{tech}</Tag>
          ))}
        </Tags>
        
        <Links>
          {/* {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </Link>
          )} */}
          {project.githubUrl && (
            <LinkSecondary href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              View Code
            </LinkSecondary>
          )}
        </Links>
      </Content>
    </Card>
  );
};

export default ProjectCard; 