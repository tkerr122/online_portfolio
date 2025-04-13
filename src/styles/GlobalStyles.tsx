import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    font-size: 16px;
    transition: background-color ${({ theme }) => theme.transition}, color ${({ theme }) => theme.transition};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 700;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transition};

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  button {
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.main};
  }

  ul, ol {
    list-style-position: inside;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  section {
    padding: ${({ theme }) => theme.spacing.xl} 0;
  }
`;

export default GlobalStyles; 