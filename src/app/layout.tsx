import type { Metadata, Viewport } from 'next';
import { getProfileData } from '@/hooks/useDataFetching';
import RootLayout from '@/components/Layout/RootLayout';
import StyledComponentsRegistry from '@/lib/registry';

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

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch profile data for the layout (header/footer)
  const profileData = await getProfileData();
  
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <RootLayout profileData={profileData}>{children}</RootLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
} 