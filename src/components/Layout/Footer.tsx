'use client';

import styled from 'styled-components';
import Link from 'next/link';
import Container from './Container';
import type { Profile } from '@/types';

interface FooterProps {
  profileData: Profile;
}

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.card};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  margin-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

const FooterSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FooterHeading = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.span`
  color: ${({ theme }) => theme.colors.lightText};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.xs} 0;
  display: block;
  font-size: 0.9rem;
  transition: color ${({ theme }) => theme.transition};
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  transition: color ${({ theme }) => theme.transition};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Footer = ({ profileData }: FooterProps) => { 
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <FooterHeading>About Me</FooterHeading>
            <FooterText>
              {profileData.description}
            </FooterText>
            <SocialLinks>
              <SocialLink href={profileData.social.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </SocialLink>
              <SocialLink href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </SocialLink>
              <SocialLink href={profileData.social.twitter} target="_blank" rel="noopener noreferrer">
                Twitter
              </SocialLink>
            </SocialLinks>
          </FooterSection>
          
          <FooterSection>
            <FooterHeading>Quick Links</FooterHeading>
            <FooterLinks>
              <li>
                <Link href="/">
                  <FooterLink>Home</FooterLink>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <FooterLink>About</FooterLink>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <FooterLink>Projects</FooterLink>
                </Link>
              </li>
              <li>
                <Link href="/experience">
                  <FooterLink>Experience</FooterLink>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <FooterLink>Contact</FooterLink>
                </Link>
              </li>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <FooterHeading>Contact</FooterHeading>
            <FooterText>{profileData.email}</FooterText>
            <FooterText>{profileData.phone}</FooterText>
            <FooterText>{profileData.location}</FooterText>
          </FooterSection>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 