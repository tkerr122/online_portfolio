'use client';

import styled from 'styled-components';
import Section from '@/components/common/Section';
import type { Profile } from '@/types';

interface ContactPageProps {
  profileData: Profile;
}

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-right: ${({ theme }) => theme.spacing.md};
`;

const InfoContent = styled.div`
  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  p {
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
  }
`;

const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: border-color ${({ theme }) => theme.transition};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: border-color ${({ theme }) => theme.transition};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition};
  margin-top: ${({ theme }) => theme.spacing.md};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default function ContactPage({ profileData }: ContactPageProps) {
  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    alert('Thank you for your message! This is a demo form.');
  };
  
  return (
    <Section
      title="Contact Me"
      subtitle="Get in touch for collaborations or work opportunities"
    >
      <ContactGrid>
        <ContactInfo>
          <InfoItem>
            <InfoIcon>📧</InfoIcon>
            <InfoContent>
              <h3>Email</h3>
              <p>{profileData.email}</p>
            </InfoContent>
          </InfoItem>
          
          <InfoItem>
            <InfoIcon>📱</InfoIcon>
            <InfoContent>
              <h3>Phone</h3>
              <p>{profileData.phone}</p>
            </InfoContent>
          </InfoItem>
          
          <InfoItem>
            <InfoIcon>📍</InfoIcon>
            <InfoContent>
              <h3>Location</h3>
              <p>{profileData.location}</p>
            </InfoContent>
          </InfoItem>
          
          <InfoItem>
            <InfoIcon>🔗</InfoIcon>
            <InfoContent>
              <h3>Social</h3>
              <p>
                <a href={profileData.social.github} target="_blank" rel="noopener noreferrer">GitHub</a> | 
                <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer"> LinkedIn</a> | 
                <a href={profileData.social.twitter} target="_blank" rel="noopener noreferrer"> Twitter</a>
              </p>
            </InfoContent>
          </InfoItem>
        </ContactInfo>
        
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" placeholder="Your name" required />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" placeholder="Your email" required />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" name="subject" placeholder="Subject" required />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea id="message" name="message" placeholder="Your message" required />
            </FormGroup>
            
            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
        </FormContainer>
      </ContactGrid>
    </Section>
  );
} 