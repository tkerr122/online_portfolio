import styled from 'styled-components';
import { Experience } from '@/types';
import { motion } from 'framer-motion';

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

const ExperienceCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const DateLocation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 0.9rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const Company = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text};
`;

const Position = styled.h4`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

const Description = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

const AchievementsList = styled.ul`
  list-style-type: none;
  padding-left: ${({ theme }) => theme.spacing.md};
`;

const AchievementItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  
  &::before {
    content: '•';
    position: absolute;
    left: -${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ExperienceItem = ({ experience, index }: ExperienceItemProps) => {
  return (
    <ExperienceCard
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <DateLocation>
        <span>{`${experience.startDate} - ${experience.endDate}`}</span>
        <span>{experience.location}</span>
      </DateLocation>
      
      <Company>{experience.company}</Company>
      <Position>{experience.position}</Position>
      
      <Description>{experience.description}</Description>
      
      <AchievementsList>
        {experience.achievements.map((achievement, idx) => (
          <AchievementItem key={idx}>{achievement}</AchievementItem>
        ))}
      </AchievementsList>
    </ExperienceCard>
  );
};

export default ExperienceItem; 