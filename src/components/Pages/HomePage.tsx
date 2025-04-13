'use client';

import styled from 'styled-components';
import Image from 'next/image';
import type { Profile, Project, SkillCategory } from '@/types';
import Section from '@/components/common/Section';
import Container from '@/components/Layout/Container';
import ProjectCard from '@/components/Projects/ProjectCard';
import SkillBar from '@/components/Skills/SkillBar';

// Define props for the HomePage component
interface HomePageProps {
  profileData: Profile;
  featuredProjects: Project[];
  skillsData: SkillCategory[];
}

// Styled components for the home page
const HeroSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xl} 0`};
  min-height: 85vh;
  display: flex;
  align-items: center;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

const HeroText = styled.div`
  flex: 1;
`;

const Greeting = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const MyName = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 4rem;
  }
`;

const Role = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Bio = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 600px;
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  .image-container {
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid ${({ theme }) => theme.colors.primary};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const PrimaryButton = styled.a`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  font-weight: 500;
  transition: background-color ${({ theme }) => theme.transition};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const SecondaryButton = styled.a`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  font-weight: 500;
  transition: background-color ${({ theme }) => theme.transition}, color ${({ theme }) => theme.transition};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const ProjectGrid = styled.div`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillCategoryBox = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 600;
`;

// Main HomePage component
export default function HomePage({ profileData, featuredProjects, skillsData }: HomePageProps) {
  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroText>
              {/* <Greeting>Hello, I'm</Greeting> */}
              <MyName>{profileData.name}</MyName>
              <Role>{profileData.title}</Role>
              <Bio>{profileData.description}</Bio>
              <ButtonGroup>
                <PrimaryButton href="/contact">Get in Touch</PrimaryButton>
                <SecondaryButton href="/projects">View Projects</SecondaryButton>
              </ButtonGroup>
            </HeroText>
            
            <HeroImage>
              <div className="image-container">
                <Image
                  src={profileData.avatar || "/images/avatar.jpg"}
                  alt={profileData.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  priority
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </HeroImage>
          </HeroContent>
        </Container>
      </HeroSection>
      
      {/* Projects Section */}
      <Section
        id="projects"
        title="Featured Projects"
        subtitle="Check out some of my recent work"
      >
        <ProjectGrid>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ProjectGrid>
      </Section>
      
      {/* Skills Section */}
      <Section
        id="skills"
        title="Skills & Expertise"
        subtitle="My technical skill set and areas of expertise"
      >
        <SkillsGrid>
          {skillsData.map((category, index) => (
            <SkillCategoryBox key={index}>
              <CategoryTitle>{category.category}</CategoryTitle>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar key={skillIndex} skill={skill} />
              ))}
            </SkillCategoryBox>
          ))}
        </SkillsGrid>
      </Section>
    </>
  );
} 