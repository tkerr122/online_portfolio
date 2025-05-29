import type { Metadata, Viewport } from 'next';
import RootLayout from '@/components/Layout/RootLayout';
import StyledComponentsRegistry from '@/lib/registry';
import { Profile } from '@/types';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Theo | Remote Sensing Scientist',
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
  title: 'Remote Sensing Scientist',
  description: 'Remote Sensing Scientist specializing in Image Interpretation and Python scripting',
  email: 'theodoremkerr@gmail.com',
  phone: '240-281-1498',
  location: 'Washington, D.C.',
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
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
      <head>
        <Script id="vercel-deployment-setup" strategy="beforeInteractive">
          {`
            window.process = window.process || {};
            window.process.env = window.process.env || {};
            window.process.env.NEXT_PUBLIC_BASE_URL = window.location.origin;
            window.process.env.VERCEL_URL = window.location.host;
          `}
        </Script>
      </head>
      <body>
        <StyledComponentsRegistry>
          <RootLayout profileData={defaultProfile}>{children}</RootLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
} 