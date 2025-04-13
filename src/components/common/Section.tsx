'use client';

import styled from 'styled-components';
import { ReactNode } from 'react';
import Container from '../Layout/Container';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  centered?: boolean;
  fluid?: boolean;
}

const SectionContainer = styled.section<{ $centered?: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.xl} 0`};
  text-align: ${({ $centered }) => ($centered ? 'center' : 'left')};
`;

const SectionHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const TitleWithLine = styled(motion.h2)<{ $centered?: boolean }>`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-top: ${({ theme }) => theme.spacing.sm};
    margin-left: ${({ $centered }) => ($centered ? 'auto' : '0')};
    margin-right: ${({ $centered }) => ($centered ? 'auto' : '0')};
  }
`;

const SubtitleStyled = styled(motion.p)<{ $centered?: boolean }>`
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 1.1rem;
  max-width: 600px;
  margin-left: ${({ $centered }) => ($centered ? 'auto' : '0')};
  margin-right: ${({ $centered }) => ($centered ? 'auto' : '0')};
`;

const Section = ({ id, title, subtitle, children, centered = false, fluid = false }: SectionProps) => {
  return (
    <SectionContainer id={id} $centered={centered}>
      <Container fluid={fluid}>
        <SectionHeader>
          <TitleWithLine 
            $centered={centered}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </TitleWithLine>
          
          {subtitle && (
            <SubtitleStyled 
              $centered={centered}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {subtitle}
            </SubtitleStyled>
          )}
        </SectionHeader>
        
        {children}
      </Container>
    </SectionContainer>
  );
};

export default Section; 