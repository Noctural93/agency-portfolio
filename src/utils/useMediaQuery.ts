import { useEffect, useState } from 'react';

/**
 * Hook to check if a media query matches the current screen size.
 *
 * @param query - Media query string (e.g. '(min-width: 768px)')
 * @param initialValue - Default match value (e.g. false for SSR-safe fallback)
 */
const useMediaQuery = (
  query: string = '(min-width: 768px)',
  initialValue: boolean = false
): boolean => {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return initialValue;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    const handler = () => setMatches(mediaQuery.matches);

    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
};

export default useMediaQuery;
