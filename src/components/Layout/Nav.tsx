'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useTheme } from '@/hooks/useTheme';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.md};
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: background-color ${({ theme }) => theme.transition};
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const MenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'all' : 'none')};
  transition: transform 0.3s ease, opacity 0.3s ease;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    position: static;
    flex-direction: row;
    background-color: transparent;
    padding: 0;
    box-shadow: none;
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }
`;

const NavLink = styled.span`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  margin: 0 ${({ theme }) => theme.spacing.sm};
  position: relative;
  font-weight: 500;
  display: inline-block;
  cursor: pointer;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0 ${({ theme }) => theme.spacing.md};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: ${({ theme }) => theme.spacing.md};
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <NavContainer>
      <NavContent>
        <Link href="/">
          <Logo>Theo Kerr</Logo>
        </Link>
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <MenuButton onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </MenuButton>
          
          <NavLinks $isOpen={isMenuOpen}>
            <Link href="/">
              <NavLink className={pathname === "/" ? "active" : ""}>Home</NavLink>
            </Link>
            <Link href="/about">
              <NavLink className={pathname === "/about" ? "active" : ""}>About</NavLink>
            </Link>
            <Link href="/projects">
              <NavLink className={pathname === "/projects" ? "active" : ""}>Projects</NavLink>
            </Link>
            <Link href="/experience">
              <NavLink className={pathname === "/experience" ? "active" : ""}>Experience</NavLink>
            </Link>
            <Link href="/contact">
              <NavLink className={pathname === "/contact" ? "active" : ""}>Contact</NavLink>
            </Link>
          </NavLinks>
          
          <ThemeToggle onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </ThemeToggle>
        </div>
      </NavContent>
    </NavContainer>
  );
};

export default Nav; 