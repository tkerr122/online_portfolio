// This is a Server Component
import { Metadata } from 'next';
import { getProfileData } from '@/hooks/useDataFetching';
import ContactPage from '@/components/Pages/ContactPage';

export const metadata: Metadata = {
  title: 'Contact | Theo Portfolio',
  description: 'Get in touch with me for work opportunities or collaborations',
};

export default async function Contact() {
  // Server-side data fetching
  const profileData = await getProfileData();
  
  // Pass data to client component
  return <ContactPage profileData={profileData} />;
} 