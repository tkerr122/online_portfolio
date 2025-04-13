'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';
import { ThemeProvider } from '@/hooks/useTheme';
import GlobalStyles from '@/styles/GlobalStyles';
import type { Profile } from '@/types';

interface RootLayoutProps {
  children: ReactNode;
  profileData: Profile;
}

const Main = styled.main`
  padding-top: 80px;
  min-height: calc(100vh - 350px);
`;

const RootLayout = ({ children, profileData }: RootLayoutProps) => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Nav />
      <Main>{children}</Main>
      {/* <Footer profileData={profileData} /> */}
    </ThemeProvider>
  );
};

export default RootLayout; 