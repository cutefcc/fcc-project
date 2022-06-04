import { useRef, useEffect, useCallback } from 'react';

export function useMountedState() {
  const mounted = useRef<boolean>(false);
  const getMounted = useCallback(() => mounted.current, []);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return getMounted;
}
