'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Section from '@/components/common/Section';
import SkillBar from '@/components/Skills/SkillBar';
import type { Profile, SkillCategory } from '@/types';

interface AboutPageProps {
  profileData: Profile;
  skillsData: SkillCategory[];
}

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AboutContent = styled.div`
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: 1.8;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow};
  height: 400px;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 500px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillCategory = styled.div`
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

export default function AboutPage({ profileData, skillsData }: AboutPageProps) {
  return (
    <>
      <Section
        title="About Me"
        subtitle="Learn more about my background and skills"
      >
        <AboutGrid>
          <AboutContent>
            <p>
              Hello, I'm {profileData.name}, a {profileData.title} based in {profileData.location}. 
              I specialize in creating modern, responsive web applications with a focus on user experience and performance.
            </p>
            <p>
              I currently work at the University of Maryland, College Park as a Faculty Specialist in the Geography Department. 
              In this role, I integrate Geographic Information Systems (GIS), Remote Sensing, lidar technology, and programming to study patterns of land use change. 
              My work is driven by a passion for understanding how landscapes evolve over time and the broader environmental and societal impacts of those changes. 
              I collaborate on interdisciplinary research projects and develop tools that help visualize and analyze spatial data in innovative ways.
            </p>
            <p>
              {profileData.description}
            </p>
          </AboutContent>
          
          <ImageWrapper>
            <Image
              src={profileData.avatar}
              alt={profileData.name}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </ImageWrapper>
        </AboutGrid>
      </Section>
      
      <Section
        title="My Skills"
      >
        <SkillsGrid>
          {skillsData.map((category, index) => (
            <SkillCategory key={index}>
              <CategoryTitle>{category.category}</CategoryTitle>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar key={skillIndex} skill={skill} />
              ))}
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Section>
    </>
  );
} 