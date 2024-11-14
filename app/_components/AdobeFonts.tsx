'use client';

import { useEffect } from 'react';

export function AdobeFonts() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://use.typekit.net/${process.env.NEXT_PUBLIC_ADOBE_FONT_PROJECT_ID}.js`;
    script.async = true;
    script.onload = () => {
      (window as any).Typekit.load({ async: true });
    };
    document.head.appendChild(script);
  }, []);

  return null;
}
