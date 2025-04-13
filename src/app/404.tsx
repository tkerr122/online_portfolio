'use client';

import Link from 'next/link';

export default function Custom404() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a 
        href="/" 
        style={{
          display: 'inline-block',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem',
          marginTop: '1.5rem',
          textDecoration: 'none'
        }}
      >
        Return to Home
      </a>
    </div>
  );
} 