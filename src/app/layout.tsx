import type { Metadata, Viewport } from 'next';
import RootLayout from '@/components/Layout/RootLayout';
import StyledComponentsRegistry from '@/lib/registry';
import { Profile } from '@/types';

export const metadata: Metadata = {
  title: 'Theo | Full Stack Developer',
  description: 'Personal portfolio website showcasing projects and skills',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
};

// Default profile data
const defaultProfile: Profile = {
  name: 'Theo',
  title: 'Full Stack Developer',
  description: 'Full Stack Developer specializing in modern web technologies',
  email: 'contact@example.com',
  phone: '',
  location: 'New York, NY',
  social: {
    github: '',
    linkedin: '',
    twitter: '',
  },
  avatar: '/placeholder-avatar.png',
  resume: '/resume.pdf'
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <RootLayout profileData={defaultProfile}>{children}</RootLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
} 