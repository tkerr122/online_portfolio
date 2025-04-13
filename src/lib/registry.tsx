'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    // This is important to prevent memory leaks in styled-components
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  // If client-side, just render children
  if (typeof window !== 'undefined') return <>{children}</>;

  // If server-side, wrap with StyleSheetManager
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance} enableVendorPrefixes>
      {children}
    </StyleSheetManager>
  );
} 