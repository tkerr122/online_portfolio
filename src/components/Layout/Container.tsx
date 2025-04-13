'use client';

import styled from 'styled-components';
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  fluid?: boolean;
}

const StyledContainer = styled.div<{ $fluid?: boolean }>`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: ${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing.md};
  
  ${({ $fluid, theme }) => !$fluid && `
    max-width: 100%;
    
    @media (min-width: ${theme.breakpoints.sm}) {
      max-width: 540px;
    }
    
    @media (min-width: ${theme.breakpoints.md}) {
      max-width: 720px;
    }
    
    @media (min-width: ${theme.breakpoints.lg}) {
      max-width: 960px;
    }
    
    @media (min-width: ${theme.breakpoints.xl}) {
      max-width: 1200px;
    }
  `}
`;

const Container = ({ children, fluid = false }: ContainerProps) => {
  return <StyledContainer $fluid={fluid}>{children}</StyledContainer>;
};

export default Container; 