import styled from 'styled-components';
import { motion } from 'framer-motion';

interface SkillItemProps {
  skill: string;
}

const SkillBadge = styled(motion.div)`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  margin-right: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 500;
  font-size: 0.9rem;
  transition: all ${({ theme }) => theme.transition};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const SkillBar = ({ skill }: SkillItemProps) => {
  return (
    <SkillBadge
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {skill}
    </SkillBadge>
  );
};

export default SkillBar; 